import React from 'react';
import TextInout from './TextInout';
import Todo from './Todo';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import Calendar from './Calendar';

const Home = () => {
    return (
        <div>
            <div className='mx-96 mt-10'>
                <label for="my-modal-6" class="btn btn-xs ">Calendar</label>
                <input type="checkbox" id="my-modal-6" class="modal-toggle" />
                <div class="modal modal-bottom sm:modal-middle">
                    <div class="modal-box">
                        <Calendar></Calendar>
                        <div class="modal-action">
                            <label for="my-modal-6" class="btn">ok</label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col  lg:flex-row mt-10">

                <div class="grid flex-grow  place-items-center">
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