import { NextApiRequest, NextApiResponse } from "next";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try{
        const data = await resend.sendEmail({
            from: 'onboarding@resend.dev',
            to: 'descometusah@gmail.com',
            subject: 'Hello world',
            
        });

        res.status(200).json(data);
    }
    catch(error) {
        res.status(400).json(error);
    }
}