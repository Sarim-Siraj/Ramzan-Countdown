function countdown() {
    setInterval(function () {
        var ramzanDate = new Date('28 Feb , 2025');
        var todayDate = new Date();
        var ramZan2025 = ramzanDate.getTime() - todayDate.getTime()
        var counterDays = ramZan2025 / (1000 * 60 * 60 * 24)
        var counterHours = ramZan2025 % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)
        var counterMinutes = ramZan2025 % (1000 * 60 * 60) / (1000 * 60)
        var counterSecond = ramZan2025 % (1000 * 60) / (1000)

        // alert(Math.floor(counterDays))
        document.getElementById("days").innerHTML = `<span>${Math.floor(counterDays)}</span>`
        document.getElementById("hours").innerHTML = `<span>${Math.floor(counterHours)}</span>`
        document.getElementById("minutes").innerHTML = `<span>${Math.floor(counterMinutes)}</span>`
        document.getElementById("second").innerHTML=`<span>${Math.floor(counterSecond)}</span>`
    }, 1000)

}
countdown();