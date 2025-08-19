const Bus=require('./buses');
const Booking=require('./bookings');
const User=require('./users');
const Payment=require('./payments');

User.hasMany(Booking);
Booking.belongsTo(User);

Bus.hasMany(Booking);
Booking.belongsTo(Bus);

module.exports={
    Bus,
    Booking,
    User,
    Payment
}