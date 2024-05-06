export default class Schedule {
    constructor({ userName, userEmail ,specialist, doctor, date, time }) {
        this.id = this.generateId();
        this.userName = userName;
        this.userEmail = userEmail;
        this.specialist = specialist;
        this.doctor = doctor;
        this.date = date;
        this.time = time;
    }

    generateId() {
        return Math.floor(Math.random() * 1000) + 1;
    }
}