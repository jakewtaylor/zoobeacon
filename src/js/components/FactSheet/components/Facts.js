import React from 'react';

export const Facts = ({ facts }) => (
    <div>
        {facts.map(({ key, val }) => (
            <div>
                <p>{key}</p>
                <p>{val}</p>]
            </div>
        ))}
    </div>
);