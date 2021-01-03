import React from 'react';

const dataTech = [
    {
        title: 'Cloud computing',
        level: 60,
        comments: (
            <ul>
                <li><b>Microsoft Azure</b>: quite familiar with majority of Azure services thanks to previous work experience.</li>
                <li><b>AWS</b>: mostly used AWS SageMaker and DeepRacer.</li>
                <li><b>Google Cloud</b>: used Google App Engine to deploy a Flask app.</li>
                <li><b>Heroku</b>: used Heroku to deploy dockerized web app.</li>
            </ul>
        )
    },
    {
        title: 'Data Science / AI',
        level: 90,
        comments: (
            <ul>
                <li><b>Automated Machine Learning</b>: AWS SageMaker, Azure ML, Dataiku.</li>
                <li><b>Chatbot development</b>: Google Dialogflow, IBM Watson.</li>
                <li><b>Data visualization</b>: Power BI, Tableau, Plotly.</li>
            </ul>
        )
    },
]

export default dataTech;