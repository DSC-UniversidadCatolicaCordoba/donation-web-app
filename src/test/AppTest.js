import React from 'react';
import {Route, Switch } from 'react-router-dom';

//Components to Try

function AppTest() {
  return (
      <Switch>
        <Route exact path='/test/helloword'></Route>
        {
            /*
            si tienen que probar un componente hacen lo mismo que HelloWord, crean la ruta para
            utilizar el componente. Si van a hello word van a ver que utilizamos el componenten que
            declaramos de muchas formas.
            Se le denomina a testUnitarios cuando una funcion o en este caso un componente lo probamos
            de diversas maneras para ver si realmente esta funcionando correcto.
            */
        }
      </Switch>
  );
}

export default AppTest;