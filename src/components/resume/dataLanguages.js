import React from 'react';

const dataLanguages = [
    {
        title: 'English',
        linkedIn: 'Full professional proficiency',
        level: 84,
        speaking: 'Fluent',
        CEFR: 'C1',
        comments: (
            <ul>
                <li>Undergraduate and graduate degrees completed in English.</li>
                <li>Professional experience in international environments.</li>
                <li>Consume information mostly in English.</li>
            </ul>
        )
    },
    {
        title: 'Russian',
        linkedIn: 'Native or bilingual proficiency',
        level: 100,
        speaking: 'Native',
        CEFR: 'C2',
        comments: <ul><li>Mother tongue.</li></ul>
    },
    {
        title: 'French',
        linkedIn: 'Professional proficiency',
        level: 67,
        speaking: 'Fluent',
        CEFR: 'B2',
        comments: (
            <ul>
                <li>Lived 2 months in Toulouse, France.</li>
                <li>Obtained DELF B2 certificate in 2015 with speaking grade of 23/25.</li>
                <li>Room for improvement: writing skills.</li>
            </ul>
        )
    },
    {
        title: 'Spanish',
        linkedIn: 'Professional proficiency',
        level: 67,
        speaking: 'Fluent',
        CEFR: 'B2',
        comments: (
            <ul>
                <li>Lived 1 year in Madrid, Spain.</li>
                <li>Did not get any certificates yet, but have experience passing interviews in Spanish.</li>
                <li>Room for improvement: writing skills.</li>
            </ul>
        )
    },
    {
        title: 'Kazakh',
        linkedIn: 'Limited professional proficiency',
        level: 50,
        speaking: 'Proficient',
        CEFR: 'B1',
        comments: (
            <ul>
                <li>Conversational level of proficiency.</li>
                <li>Mother tongue of my parents.</li>
            </ul>
        )
    },
    {
        title: 'Swedish',
        linkedIn: 'Elementary proficiency',
        level: 33,
        speaking: 'Beginner',
        CEFR: 'A1',
        comments: (
            <ul>
                <li>Started to learn in May 2020 (self-study).</li>
                <li>Continue with instructor-led courses in mid-January 2021.</li>
            </ul>
        )
    }
    ]

export default dataLanguages;