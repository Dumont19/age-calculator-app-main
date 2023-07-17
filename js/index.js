const transformDate = () => {
    const inputDay = document.querySelector('#day')
    const inputMonth = document.querySelector('#month')
    const inputYear = document.querySelector('#year')
    const labelDay = document.querySelector('#label-day')
    const labelMonth = document.querySelector('#label-month')
    const labelYear = document.querySelector('#label-year')
    const btn = document.querySelector('.btn')
    const day = document.querySelector('#res-d')
    const month = document.querySelector('#res-m')
    const year = document.querySelector('#res-y')
    const errorMessage = Array.from(document.querySelectorAll('small'))

    const checkInputs = () => {
        if (inputDay.value === '') {
            labelDay.style.color = 'var(--light-red)'
            inputDay.classList.add('error')
            errorMessage[0].style.display = 'block'
        } else {
            return 
        }

        if (inputMonth.value === '') {
            labelMonth.style.color = 'var(--light-red)'
            inputMonth.classList.add('error')
            errorMessage[1].style.display = 'block'
        } else {
            return 
        }

        if (inputYear.value === '') {
            labelYear.style.color = 'var(--light-red)'
            inputYear.classList.add('error')
            errorMessage[2].style.display = 'block'
        } else {
            return 
        }
    }

    const calculateAge = () => {
        const currentDate = new Date().getMilliseconds()
        
    }
}
transformDate()