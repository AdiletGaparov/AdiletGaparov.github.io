import React from 'react';

const dataProgramming = [
    {
        title: "Python",
        level: 80,
        definition: 'Can write professional code',
        comments: (
            <ul>
                <li>My current programming language of choice.</li>
                <li><b>Machine Learning / Data Analytics</b>: numpy/pandas for data manipulation, scikit-learn/PyTorch/Keras for Machine Learning, spaCy/NLTK for Natural Language Processing tasks.</li>
                <li><b>Web dev</b>: used Flask and Dash by Plotly in my freelance project, used Streamlit in many projects during Master's program and to build the first version of my personal website.</li>
            </ul>
        )
    },
    {
        title: 'R',
        level: 60,
        definition: "Can write the code",
        comments: <ul><li>Despite preferring pandas over data.table and scikit-learn over R packages for Machine Learning, I can use R if needed.</li></ul>
    },
    {
        title: 'SQL',
        level: 70,
        definition: "Can write the code",
        comments: <ul><li>Can write sophisticated SQL queries.</li></ul>
    },
    {
        title: "HTML/CSS",
        level: 50,
        definition: "Can write some code",
        comments: <ul><li>Used HTML and CSS for my freelance project, for projects during Master's program and in building this website.</li></ul>
    },
    {
        title: "JavaScript",
        level: 60,
        definition: "Can write the code",
        comments: <ul><li>This website is written in React.js.</li></ul>
    }
]

export default dataProgramming;