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
    const errorMessage = Array.from(document.querySelectorAll('.blank-field'))
    const errorFormatMessage = Array.from(document.querySelectorAll('.format-error'))

    

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

    const checkFormat = () => {
        const numberPatternRegex = /[0-9]+/
        const rangeDayPatternRegex = /^(0[1-9]|3[0-1])$/
        const rangeMonthPatternRegex = /^(0[1-9]|1[0-2])$/
        const currentYear = new Date().getFullYear()
        console.log(rangeDayPatternRegex.test(inputDay.value))

        if (numberPatternRegex.test(inputDay.value) === false || rangeDayPatternRegex.test(inputDay.value) === false) {
            labelDay.style.color = 'var(--light-red)'
            inputDay.classList.add('error')
            errorFormatMessage[0].style.display = 'block'
        }

        if (numberPatternRegex.test(inputMonth.value) === false || rangeMonthPatternRegex.test(inputMonth.value) === false ) {
            labelMonth.style.color = 'var(--light-red)'
            inputMonth.classList.add('error')
            errorFormatMessage[1].style.display = 'block'
        } 

        if (numberPatternRegex.test(inputYear.value) === false || Number(inputYear.value) > currentYear ) {
            labelYear.style.color = 'var(--light-red)'
            inputYear.classList.add('error')
            errorFormatMessage[2].style.display = 'block'
        } 
    }

    const calculateAge = () => {
        const currentDate = new Date()
        
    }

    const handleSubmit = () => {
        

        btn.addEventListener('click', event => {
            event.preventDefault()
            checkInputs()
            checkFormat()
        })
    }
    handleSubmit()
}
transformDate()