import React from 'react';
import Marquee from 'react-fast-marquee';

const Latest = () => {
    return (
        <section className='flex gap-5 items-center mx-auto'>
            <p className='bg-secondary py-2 px-3 text-white'>Latest</p>
            <Marquee pauseOnHover={true} className='flex gap-5 font-semibold'>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam iure ullam repudiandae quaerat quo minima quam voluptas laboriosam adipisci corrupti est atque ad et, animi obcaecati accusantium architecto illo similique non alias sequi consequatur dicta ut inventore? Consectetur quae quaerat, omnis distinctio dolores sequi quidem maiores quam corporis, ea nihil?
                </p>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam iure ullam repudiandae quaerat quo minima quam voluptas laboriosam adipisci corrupti est atque ad et, animi obcaecati accusantium architecto illo similique non alias sequi consequatur dicta ut inventore? Consectetur quae quaerat, omnis distinctio dolores sequi quidem maiores quam corporis, ea nihil?
                </p>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam iure ullam repudiandae quaerat quo minima quam voluptas laboriosam adipisci corrupti est atque ad et, animi obcaecati accusantium architecto illo similique non alias sequi consequatur dicta ut inventore? Consectetur quae quaerat, omnis distinctio dolores sequi quidem maiores quam corporis, ea nihil?
                </p>
            </Marquee>
        </section>
    );
};

export default Latest;