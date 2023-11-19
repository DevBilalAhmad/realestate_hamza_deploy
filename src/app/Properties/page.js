import React from 'react'

const page = () => {
  return (
    <div className='mx-32'>
        <h1 className='text-5xl'>Find your perfect<br></br> stay today</h1>
        <p className='text-2xl mr-[1150px]'>Our rooms are selected for their stellar locations, design-led decor and all the curated details that make a house a home.</p>
        <form className="calendar-container" action="https://badi.com/guests/rooms/?" method="get" id="formBooking" target="_top">
      <input type="hidden" name="long_term_mode" value="" />

      <div className="mb-4">
        <select name="city_id" className="form-select jcf-hidden">
          <option value="" selected="">
            Select location
          </option>
          <option value="2413">London</option>
        </select>
        <span className="jcf-select jcf-unselectable jcf-select-form-select">
          <span className="jcf-select-text">
            <span className="">Select location</span>
          </span>
          <span className="jcf-select-opener"></span>
        </span>
      </div>

      <div className="mb-4">
        <input
          data-calendar={{ type: 'search' }}
          type="text"
          name="start_date"
          placeholder="Check In"
          value=""
          className="border p-2"
        />
      </div>

      <div className="mb-4">
        <input
          data-calendar={{ type: 'search' }}
          type="text"
          name="end_date"
          placeholder="Check Out"
          value=""
          className="border p-2"
        />
      </div>

      <div className="hidden_calendar">
        {/* ... Rest of the HTML ... */}
      </div>

      <div className="mb-4">
        <select name="tag" className="form-select type-filter jcf-hidden">
          <option value="">Type of room</option>
          <option value="single">Single room</option>
          <option value="double">Double room</option>
          <option value="suite">Suite</option>
          <option value="studio">Studio</option>
          <option value="apartment">Apartment</option>
        </select>
        <span className="jcf-select jcf-unselectable jcf-select-form-select jcf-select-type-filter">
          <span className="jcf-select-text">
            <span className="">Type of room</span>
          </span>
          <span className="jcf-select-opener"></span>
        </span>
      </div>

      <div className="mb-4">
        <select name="val" className="form-select value-filter jcf-hidden">
          <option value="" selected="">
            Filter by price
          </option>
          <option value="1">800€ - 1000€</option>
          <option value="2">1000€ - 1500€</option>
          <option value="3">1500€ - 2000€</option>
          <option value="4">2000€ - 2500€</option>
          <option value="5">2500€ - 3000€</option>
          <option value="6">Over 3000€</option>
        </select>
        <span className="jcf-select jcf-unselectable jcf-select-form-select jcf-select-value-filter">
          <span className="jcf-select-text">
            <span className="">Filter by price</span>
          </span>
          <span className="jcf-select-opener"></span>
        </span>
      </div>

      <div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Search
        </button>
      </div>
    </form>
    </div>
  )
}

export default page