import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import './Home.css';
import albert from './../albert-4.png';
import albertResult from './../albert.png';
import { doc, collection, runTransaction } from "firebase/firestore";
import {} from 'firebase/analytics'
import db from "./database/firebase";
import FormControl from "@mui/material/FormControl";
import { createTheme } from "@mui/material/styles";
import ThemeProvider from "@mui/material/styles/ThemeProvider";

function Home() {
    const [name, setName] = useState(''); // Имя
    const [phone, setPhone] = useState(''); // Номер телефона
    const [commandNumber, setCommandNumber] = useState(0); // Номер команды
    const [loading, setLoading] = useState(false); // Статус загрузки
    const theme = createTheme({
        palette: {
            error: {
                main: "#302d30",
            }
        }
    });

    const addTeam = async () => {
        const totalCommandsNumberRef = doc(db, 'total_commands', 'number');
        const commandRef = collection(db, "commands");

        try {
            const newTeam = await runTransaction(db, async (transaction) => {
                setLoading(true);
                const totalCommandsDoc = await transaction.get(totalCommandsNumberRef);

                if (!totalCommandsDoc.exists()) {
                    throw "Document does not exists";
                }

                let commandNumber = totalCommandsDoc.data().commands_number + 1;

                transaction.set(doc(commandRef), {
                    name: name,
                    phone: phone,
                    date: new Date(),
                    command_number: commandNumber,
                });

                transaction.update(totalCommandsNumberRef, { commands_number: commandNumber });

                setCommandNumber(commandNumber);
            });
        } catch (e) {
            console.error("Ошибка: \n", e);
        } finally {
            setLoading(false);
        }
    }

    // Сбросить значения
    const comeBack = () => {
        setCommandNumber(0);
        setName('');
        setPhone('');
    }

    return (
            <div className="home">
                <div className="container">
                    <div className="image-container">
                        <div className="image">
                            <img src={albert} alt="Logo" />
                        </div>
                    </div>
            <div className="form-container">
                <div className="card">
                    {commandNumber === 0 ? (
                        <div>
                            <h1>Оставить заявку</h1>
                            <FormControl fullWidth sx={{ m: 1 }}>
                                <ThemeProvider theme={theme}>
                                    <TextField
                                        className="text-field"
                                        id="outlined-adornment-amount"
                                        label="Имя"
                                        size="small"
                                        value={name}
                                        onChange={(e) => setName(e.target.value.trim())}
                                        required
                                        error={!Boolean(name)}
                                        helperText={!Boolean(name) ? "Поле 'Имя' необходимо заполнить" : ""}
                                    />
                                </ThemeProvider>
                            </FormControl>
                            <FormControl fullWidth sx={{ m: 1 }}>
                                <ThemeProvider theme={theme}>
                                    <TextField
                                        className="text-field"
                                        id="outlined-adornment-amount"
                                        label="Телефон"
                                        size="small"
                                        required
                                        type="number"
                                        placeholder="87759844789"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        error={!Boolean(phone)}
                                        helperText={!Boolean(phone) ? "Поле 'Телефон' необходимо заполнить" : ""}
                                    />
                                </ThemeProvider>
                            </FormControl>
                            <button disabled={!Boolean(name) || !Boolean(phone) || loading} onClick={addTeam}>
                                {loading ? 'Отправка...' : "Отправить"}
                            </button>
                            <sup>Нажимая на кнопку, вы соглашаетесь на обработку персональных данных</sup>
                        </div>
                    ) : (
                        <div className="text-center">
                            <h1>Ваш номер: <span className="red-text">{commandNumber}</span></h1>
                            <h3 className="red-text">Пожалуйста, сделайте скрин экрана.</h3>
                            <img src={albertResult} alt="" className="albert-image" />
                            <button onClick={comeBack}>
                                Вернуться назад
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Home;

