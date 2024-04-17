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

    updateSchedule(id, userName, userEmail, description, date, time) {
        const schedule = this.getSchedulesById(id);
        if (schedule) {
            schedule.userName = userName;
            schedule.userEmail = userEmail;
            schedule.description = description;
            schedule.date = date;
            schedule.time = time;
        }
        return schedule;
    }
}

const scheduleRepository = new ScheduleRepository();

export default scheduleRepository;