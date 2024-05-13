import React from 'react';

const data = [{
        id: 1,
        name: 'Mehraban',
        image: 'https://placekitten.com/200/200',
        city: 'Kabul',
    },

    // Note: we can add more records of above database/cards or 4 times... 
];

function App() {
    return ( <
        div className = "container" >
        <
        div className = "row" > {
            data.map((record) => ( <
                div className = "col-md-4"
                key = { record.id } >
                <
                div className = "card mb-4" >
                <
                img src = { record.image }
                className = "card-img-top"
                alt = { record.name }
                /> <
                div className = "card-body" >
                <
                h5 className = "card-title" > { record.name } < /h5> <
                p className = "card-text" > { record.city } < /p> < /
                div > <
                /div> < /
                div >
            ))
        } <
        /div> < /
        div >
    );
}

export default App;