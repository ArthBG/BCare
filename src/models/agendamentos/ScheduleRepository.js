 class ScheduleRepository {
    constructor() {
        this.schedules = [];
    }

    getAll() {
        return this.schedules;
    }

    getSchedulesById(id) {
        return this.schedules.find(schedule => schedule.id === id);
    }

    addSchedule(schedule) {
        this.schedules.push(schedule);
    }

    removeSchedule(id) {
        this.schedules = this.schedules.filter(schedule => schedule.id !== id);
    }

    updateSchedule(id, userName, userEmail,specialist,doctor, date, time) {
        const schedule = this.getSchedulesById(id);
        if (schedule) {
            schedule.userName = userName;
            schedule.userEmail = userEmail;
            schedule.specialist = specialist;
            schedule.doctor = doctor;
            schedule.date = date;
            schedule.time = time;
        }
        return schedule;
    }
}

const scheduleRepository = new ScheduleRepository();

export default scheduleRepository;