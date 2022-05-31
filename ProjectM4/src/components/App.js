import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Conciertos from './Conciertos';
import Teatro from './Teatro'
import Forma from './Forma'
import Introduccion from './Introduccion';

const App = () => {
	return (
    <div className="margen">
		<BrowserRouter>
			<Header />
        		<Routes>
		  			<Route exact path="/" element={<Introduccion/>} />			
		  			<Route exact path="/Teatro" element={<Teatro/>} />
         			 <Route exact path="/Forma" element={<Forma/>} />
         			 <Route exact path="/Conciertos" element={<Conciertos/>} />
          		</Routes>
		</BrowserRouter>
    
    </div>
	)
}

export default App;