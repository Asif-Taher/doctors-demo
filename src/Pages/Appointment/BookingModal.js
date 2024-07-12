import { format } from 'date-fns';
import React from 'react'
export default function BookingModal({date, treatment }) {
    const {name, slots} = treatment;
    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal" role="dialog">
                <div class="modal-box">
                    <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">X</label>
                    <h3 class="text-lg font-bold text-secondary">Booking for:{name}</h3>
                    <form className='grid grid-cols-1 mt-2 gap-3 justify-items-center'>
                    <input type="text" value={format(date,'pp')} class="input input-bordered w-full max-w-xs" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                    <input type="submit" placeholder="Submit" class="btn btn-secondary w-full max-w-xs" />
                    </form>
                    {/* <div class="modal-action">
                        <label for="booking-modal" class="btn">Close!</label>
                    </div> */}
                </div>
            </div>
        </div>
    )
}
