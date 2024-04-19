import { Image, Container, Title, Text, Button, SimpleGrid } from '@mantine/core';
// import image from './image.svg';
import './NotFound.css';
import {Link} from 'react-router-dom'




const NotFound = () => {
  return (
    <div className='box'>




    <Container className={'root'}>
      <SimpleGrid spacing={{ base: 40, sm: 80 }} cols={{ base: 1, sm: 2 }}>
        <Image src={'/404.jpg'} className={'mobileImage'} />
        <div className='inner-box'>
          <Title className={'title-error'}>Something is not right...</Title>
          <Text c="dimmed" size="lg">
            Page you are trying to open does not exist. You may have mistyped the address, or the
            page has been moved to another URL. If you think this is an error contact support.
          </Text>
          <Button variant="outline" size="md" mt="xl" className={'control-btn'}>
            <Link to={'/'} >Get back to home page</Link>
          </Button>

            {/* <Link 
               style={{border: '2px solid blue', padding: '10px', borderRadius: '5px', color: 'blue'}} 
               to={'/'}>Get back to home page
            </Link> */}
        </div>
        <Image src={'/404.jpg'} className={'desktopImage'} />
      </SimpleGrid>
    </Container>



    </div>
  );
}

export default NotFound