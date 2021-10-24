import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Login } from './components/Login/Login/Login';
import { Register } from './components/Login/Register/Register';
import { CreateNote } from './components/Notes/CreateNote';
import { Notes } from './components/Notes/Notes';
import { UpdateNote } from './components/Notes/UpdateNote';
import { Principal } from './screens/Landing/Principal';

export const PrelloApp = () => {

    const [search, setSearch] = useState("")

    return (
        <BrowserRouter>
            <Header setSearch={setSearch} />
            <main>
                <Route path="/" exact component={Principal} />
                <Route path="/notes" exact component={Notes} search={ search } />
                <Route path="/register" exact component={Register} />
                <Route path="/createnote" exact component={CreateNote} />
                <Route path="/note/:id" exact component={UpdateNote} />
                <Route path="/login" exact component={Login} />
            </main>
            <Footer />
        </BrowserRouter>
    )
}
