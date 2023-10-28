import React from 'react';2

function ListTodo() {
  return (
    <section className='flex justify-center'>
      <ul className='flex flex-col mt-5 gap-3'>
        <li>
          <div className='flex border w-fit font-semibold text-base rounded-sm'>
            <input type="checkbox" className='' />
            <h5>Buy Milk</h5>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </li>
      </ul>
    </section>
  )
}

export default ListTodo;