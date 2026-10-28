import React from 'react'

function Header() {
  return (
    <div>
        <header className='header'>
            <div>
                <p className='small-title'>
                    Movie night
                </p>
                <h1>Choose your film</h1>
                <p className='subtitle'>
                    Lorem ipsum dolor sit.
                </p>

            </div>
            <div className='cinema-info'>
                <span>Cinema</span>
                <strong>4 movies</strong>
            </div>
        </header>
    </div>
  )
}

export default Header