import React from 'react';
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom';
import { ContactScreen } from '../components/pages/ContactScreen';
import { HomeScreen } from '../components/pages/HomeScreen';
import { ProjectsScreen } from '../components/pages/ProjectsScreen';
import { Footer } from '../components/ui/Footer';
import { Navbar } from '../components/ui/Navbar';

export const AppRouter = () => {
  return (
    <Router>
        <div className='main-container'>
            <header>
                <Navbar />
            </header>

            <div>
                <Switch>

                    <Route exact path="/" component={ HomeScreen } />
                    <Route exact path="/contact" component={ ContactScreen } />
                    <Route exact path="/projects" component={ ProjectsScreen } />

                    <Redirect to="/" />

                </Switch>
            </div>

            <Footer />
        </div>
    </Router>
  )
}
