import asyncHandler from 'express-async-handler';
import { prisma } from '../config/prismaConfig.js';




export const createResidency = asyncHandler(async (req, res) => {

    const {title, description, price, address, country, city, image, facilities, userEmail} = req.body
    console.log(req.body)

    try {
     const residency = await prisma.residency.create({
        data: { title, 
                description, 
                price, 
                address, 
                country, 
                city, 
                image, 
                facilities, 
                owner: {connect: {email: userEmail}}
        }
     })
    res.status(201).json({message: 'Residency created successfully', data: residency})
        
    } catch (error) {

        if (error.code === 'P2002') {
            res.status(400).json({ message: 'A residency with this address is already enlisted' })
          } else {
            res.status(500).json({ message: 'Internal Server error' })

          }
        }
});




export const getAllResidencies = asyncHandler(async(req, res) => {
    const residencies = await prisma.residency.findMany({
        orderBy: {createdAt: "desc"}
    })

    res.status(200).send(residencies)
})




export const getResidency = asyncHandler(async(req, res) => {
    const {id} = req.params

    try {
        const residency = await prisma.residency.findUnique({where: {id: id}})

       res.status(200).json(residency)
        
    } catch (error) {
        throw new error(error.message)
    }
})