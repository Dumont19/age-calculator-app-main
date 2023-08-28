const transformDate = () => {
    const inputDay = document.querySelector('#day')
    const inputMonth = document.querySelector('#month')
    const inputYear = document.querySelector('#year')
    const labelDay = document.querySelector('#label-day')
    const labelMonth = document.querySelector('#label-month')
    const labelYear = document.querySelector('#label-year')
    const btn = document.querySelector('.btn')
    let resDay = document.querySelector('#res-d')
    let resMonth = document.querySelector('#res-m')
    let resYear = document.querySelector('#res-y')
    const errorMessage = Array.from(document.querySelectorAll('.blank-field'))
    const errorFormatMessage = Array.from(document.querySelectorAll('.format-error'))

    const checkInputs = () => {
        const numberPatternRegex = /[0-9]+/
        const rangeDayPatternRegex = /^(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/
        const rangeMonthPatternRegex = /^(0[1-9]|1[0-2])$/
        const currentYear = new Date().getFullYear()
        const data = calculateAge()

        if (inputDay.value === '') {
            labelDay.style.color = 'var(--light-red)'
            inputDay.classList.add('error')
            errorMessage[0].style.display = 'block'
        } else if (numberPatternRegex.test(inputDay.value) === false || rangeDayPatternRegex.test(inputDay.value) === false)  {
            labelDay.style.color = 'var(--light-red)'
            inputDay.classList.add('error')
            errorFormatMessage[0].style.display = 'block'
        } else {
            labelDay.style.color = 'var(--smoke-grey)'
            inputDay.classList.remove('error')
            errorMessage[0].style.display = 'none'
            resDay.textContent = `${data[2]}`
        }

        if (inputMonth.value === '') {
            labelMonth.style.color = 'var(--light-red)'
            inputMonth.classList.add('error')
            errorMessage[1].style.display = 'block'
            resMonth.textContent = '- -'
        } else if (numberPatternRegex.test(inputMonth.value) === false || rangeMonthPatternRegex.test(inputMonth.value) === false ){
            labelMonth.style.color = 'var(--light-red)'
            inputMonth.classList.add('error')
            errorFormatMessage[1].style.display = 'block'
        } else {
            labelMonth.style.color = 'var(--smoke-grey)'
            inputMonth.classList.remove('error')
            errorMessage[1].style.display = 'none' 
            resMonth.textContent = `${data[1]}`
        }

        if (inputYear.value === '') {
            labelYear.style.color = 'var(--light-red)'
            inputYear.classList.add('error')
            errorMessage[2].style.display = 'block'
        } else if (numberPatternRegex.test(inputYear.value) === false || Number(inputYear.value) > currentYear ) {
            labelYear.style.color = 'var(--light-red)'
            inputYear.classList.add('error')
            errorFormatMessage[2].style.display = 'block'
        } else {
            labelYear.style.color = 'var(--smoke-grey)'
            inputYear.classList.remove('error')
            errorMessage[2].style.display = 'none' 
            resYear.textContent = `${data[0]}`
        }
    }

    const calculateAge = () => {
        let year = Number(inputYear.value)
        let month = Number(inputMonth.value) - 1
        let day = Number(inputDay.value)

        const age = new Date(year, month, day)
        const date = new Date()
        const diff = Math.abs(date - age)
        let yearsAge = Math.floor(diff / 31536000000)
        let monthDiff = Math.abs(age.getMonth() - date.getMonth())
        let dayDiff = Math.abs(age.getDate() - date.getDate())

        if (monthDiff <= 1 && age.getMonth() > date.getMonth()) {
            monthDiff += 10
        }

        if (dayDiff === 0 && monthDiff === 0) {
            yearsAge += 1
        }

        if (age.getDate() > date.getDate()) {
            dayDiff += 27
            monthDiff -= 1
        }

        const data = [yearsAge, monthDiff, dayDiff]
        return data
    }

    const handleSubmit = () => {
        btn.addEventListener('click', event => {
            event.preventDefault()
            checkInputs()
            calculateAge()
        })
    }
    handleSubmit()
}
transformDate()