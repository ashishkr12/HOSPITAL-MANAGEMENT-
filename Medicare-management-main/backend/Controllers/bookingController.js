
import User from '../models/UserSchema.js';
import Doctor from '../models/DoctorSchema.js';
import Booking from '../models/BookingSchema.js';

import Stripe from 'stripe';

export const getCheckoutSession = async (req, res) => {

    try {

        // get currently booked doctor and user who are booking
        const user = await User.findById(req.params.UserId);
        
        const doctor = await Doctor.findById(req.params.doctorId);
       
        // console.log(user);
        const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

        // create stripe checkout session.
        const session = await stripe.checkout.sessions.create({
            payment_method_types:['card'],
            mode: 'payment',
            success_url: `${process.env.CLIENT_SITE_URL}/checkout-success`,
            cancel_url:`${req.protocol}://${req.get('host')}/doctors/${doctor.id}`,
            customer_email: doctor.email,
            client_reference_id: req.params.doctorId,
            line_items: [
                {
                    price_data:{
                        currency:'usd',
                        unit_amount: doctor.ticketPrice * 100,
                        product_data: {
                            name: doctor.name,
                            description: doctor.bio,
                            images: [doctor.photo],
                        }
                    },
                    quantity: 1,
                }
            ]
        })

        // create new booking

        const booking = new Booking({
            doctor: doctor._id,
            user: req.userId,
            ticketPrice: doctor.ticketPrice,
            session: session.id
        })

        await booking.save();

        res.status(200).json({success:true, message:'Successfully paid', session});

    } catch (err) {
        console.log(err);
        res.status(500).json({success:false, message:'Error creating checkout session'});
        
    }
}


