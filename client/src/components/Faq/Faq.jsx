
import { Title, Container, Accordion, ThemeIcon, rem } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';
import './Faq.css';





// const placeholder =
//   'It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.It was born from sludge on the ocean floor. In a sterile environment, the germs within its body can’t multiply, and it dies.It has no eyeballs, so it can’t see. It checks its surroundings via the ultrasonic waves it emits from its mouth.';

const Faq = () => {
  return (
    <div className={'wrap'}>
      <Container size="sm">
        <Title ta="center" className={'title1'}>
          Frequently Asked Questions
        </Title>

        <Accordion
          chevronPosition="right"
          defaultValue="reset-password"
          chevronSize={26}
          variant="separated"
          disableChevronRotation
          styles={{ label: { color: 'var(--mantine-color-black)' }, item: { border: 0 } }}
          chevron={
            <ThemeIcon radius="xl" className={'gradient'} size={26}>
              <IconPlus style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
            </ThemeIcon>
          }
        >
          <Accordion.Item className={'item'} value="reset-password">
            <Accordion.Control>How do I start the process of buying a home?</Accordion.Control>
            <Accordion.Panel>To begin the home-buying process, it's essential to determine your budget and preferences. You can then reach out to our real estate agents, who will guide you through the steps, including finding suitable properties, arranging viewings, negotiating offers, and handling paperwork.</Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item className={'item'} value="another-account">
            <Accordion.Control>What factors should I consider when choosing a neighborhood?</Accordion.Control>
            <Accordion.Panel>When selecting a neighborhood, consider factors such as proximity to schools, work, amenities (such as grocery stores and parks), safety, property values, and future development plans. Our agents can provide valuable insights into different neighborhoods to help you make an informed decision.</Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item className={'item'} value="newsletter">
            <Accordion.Control>How can I determine the value of a property?</Accordion.Control>
            <Accordion.Panel> Property valuation involves factors such as location, size, condition, comparable sales in the area, and market trends. Our real estate agents can conduct a comparative market analysis (CMA) to estimate the value of a property based on recent sales data and market conditions.</Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item className={'item'} value="credit-card">
            <Accordion.Control>What are the steps involved in selling a property?</Accordion.Control>
            <Accordion.Panel>Selling a property typically involves steps such as preparing the home for sale, setting an appropriate listing price, marketing the property, hosting showings, negotiating offers, and completing the closing process. Our experienced agents can handle all aspects of the selling process to ensure a smooth transaction.</Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item className={'item'} value="payment">
            <Accordion.Control>Are there any additional costs associated with buying or selling a home?</Accordion.Control>
            <Accordion.Panel>Yes, besides the purchase price or sales price, there are additional costs associated with buying or selling a home, such as closing costs, property taxes, title insurance, and real estate agent commissions. Our agents can provide a breakdown of these costs and help you understand your financial obligations.</Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item className={'item'} value="reset">
            <Accordion.Control>How long does it typically take to close on a property?</Accordion.Control>
            <Accordion.Panel> The closing timeline can vary depending on factors such as financing arrangements, inspections, and title searches. On average, the closing process takes between 30 to 45 days from the acceptance of an offer to the transfer of ownership. Our team will work diligently to expedite the closing process while ensuring all necessary steps are completed accurately.</Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </Container>
    </div>
  );
}

export default Faq