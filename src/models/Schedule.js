export default class Schedule {
    constructor({ userName, userEmail , doctor, description, date, time }) {
        this.id = this.generateId();
        this.userName = userName;
        this.userEmail = userEmail;
        this.doctor = doctor;
        this.description = description;
        this.date = date;
        this.time = time;
    }

    generateId() {
        return Math.floor(Math.random() * 1000) + 1;
    }
}