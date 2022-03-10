import React from 'react';
import { Link } from 'react-router-dom';
import Paths from '../Routes/Paths';

export default function MainLayout() {
  return (
    <>
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Login</Link>
                    </li>
                    <li>
                        <Link to="/register">Register</Link>
                    </li>
                    <li>
                        <Link to="/profile">Profile</Link>
                    </li>
                </ul>
            </nav>
        </header>
        <main>
            <Paths/>
        </main>
    </>
  )
}
