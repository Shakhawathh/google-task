import React from 'react';
import TextInout from './TextInout';
import Todo from './Todo';

const Home = () => {
    return (
        <div>
            <div class="flex flex-col w-full lg:flex-row mt-10">
                <div class="grid flex-grow h-32 card  rounded-box place-items-center">
                    <TextInout></TextInout>
                </div>
                <div class="divider lg:divider-horizontal"></div>
                <div class="grid flex-grow    place-items-center">
                    <Todo name="todo"></Todo>
                </div>
            </div>
        </div>
    );
};

export default Home;