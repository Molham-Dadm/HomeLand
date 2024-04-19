import axios from 'axios'
import dayjs from 'dayjs'
import {toast} from 'react-toastify'




export const api = axios.create({
    baseURL: "https://real-estate-five-flame.vercel.app/"
})




export const getAllProperties = async() =>{
    try {
    const response = await api.get('api/residency/all-residencies', {
        timeout: 10 * 1000
    })

    if(response.status === 400 || response.status === 500){
        throw response.data
    }
    return response.data
        
    } catch (error) {
        toast.error('Something went wrong')
        throw error
    }
}





export const getProperty = async(id) => {
    try {
        const response = await api.get(`api/residency/${id}`, {
            timeout: 10 * 1000
        })
    
        if(response.status === 400 || response.status === 500){
            throw response.data
        }
        return response.data
            
        } catch (error) {
            toast.error('Something went wrong')
            throw error
        }
}





export const createUser = async (email, token) => {
    try {
   
      await api.post(`api/user/register`, { email }, {
        headers: {
            Authorization: `Bearer ${token}`
        }
      });
    } catch (error) {
      // toast.error('Something went wrong, please try again!');
      throw error;
    }
  };




  export const bookVisit = async(date, propertyId, email, token) => {
     try {
       await api.post(`api/user/book-visit/${propertyId}`,
       {
        email,
        id: propertyId,
        date: dayjs(date).format('DD/MM/YYYY')
       },
       {
        headers: {
            Authorization: `Bearer ${token}`
        }
       })

     } catch (error) {
        toast.error('Something went wrong while booking a visit, try again')
        throw error
     }
  }




  export const removeBooking = async(id, email, token) => {
      try {
        await api.post(`api/user/remove-booking/${id}`,
        {email},
        
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
      
      } catch (error) {
        toast.error('Something went wrong while cancelling the booking, try again')
      }
  }





  export const toFav  = async(id, email, token) => {
      try {
        await api.post(`api/user/toFav/${id}`,
        {email},
        {
            headers: {
                Authorization: `Bearer ${token}`
            },
        })
        
      } catch (error) {
        toast.error('Failed adding to favorites')
        throw error
      }
  }



  export const getAllFav = async(email, token) => {
    if(!token) return
    try {
      const res = await api.post(`api/user/allFav`,
       {email},
       {
        headers: {
            Authorization: `Bearer ${token}`,
        },
       }
      )
      console.log(res)
      return res.data['favResidenciesID']
        
    } catch (error) {
        toast.error('Failed getting all favorites')
        throw error
    }
  }




  export const getAllBookings = async(email, token) => {
    if(!token) return
     try {
       const res = await api.post(`api/user/bookings`,
       {email},
       {
        headers: {
          Authorization: `Bearer ${token}`,
        },
       }
       )
       console.log('res', res)
       return res.data['bookedVisits']

      
     } catch (error) {
      toast.error('Failed getting all bookings')
      throw error
     }

  }



  export const createResidency = async (data, token) => {
    console.log(data);
    try {
      const res = await api.post(
        `api/residency/create`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
        
          },
        }
      );
      
      return res.data;
    } catch (error) {
      toast.error('Failed creating a residency');
      throw error;
    }
  };
  
  