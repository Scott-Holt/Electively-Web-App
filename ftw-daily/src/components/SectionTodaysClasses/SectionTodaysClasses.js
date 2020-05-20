



import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { lazyLoadWithDimensions } from '../../util/contextHelpers';

import { NamedLink } from '../../components';

//IMPORT CSS HERE!!////////////////////////////////////////
import css from './SectionTodaysClasses.css';

class LocationImage extends Component {
    render() {
        const { alt, ...rest } = this.props;
        return <img alt={alt} {...rest} />;
    }
}
const LazyImage = lazyLoadWithDimensions(LocationImage);



///THIS COMPONENT IS REALLY JUST KIND OF A FUNCTION AND IS CALLED ON LIKE A FUNCTION IN THE COMPONENT UNDERNEATH/////////
//And this is how this component is working. You made a function called classlisting link
/// this classListingLink component takes in three props in that order (name, image, search)
/// when we call on this function we pass the actual names, images etc.
///so when i call on the function i'll pass the name of the class, the class image, and link
///so it will look like classlistingLink('gardening', gardeningImageVariable, and link)
/// then I've set up a const called workshopNameText which is an HTML element <span></span>
//that in the span has the {name} passed into it by the <FormattedMessage></FormattedMessage>
///The <formattedMeassage> </formattedMeassage> prints its string and takes in the value.
///THIS IS SUPER CONFUSING. A TON OF PASSING BACK AND FORTH BETWEEN THE en.json file and back here.


// eslint-disable-next-line
const classListingLink = (name, image, searchQuery) => {
    const workshopNameText = <span className={css.workshopName}>{name}</span>;
    return (



        <NamedLink name="SearchPage" to={{ search: searchQuery }} className={css.workshop}>
            <div className={css.imageWrapper}>
                <div className={css.aspectWrapper}>
                    <LazyImage src={image} alt={name} className={css.workshopImage} />
                </div>
            </div>
            <FormattedMessage
                id="SectionTodaysClasses.classesInTitle" //this id's string is: 'classes in {workshopnameText}'
                values={{ workshopName: workshopNameText }}
            />

        </NamedLink >






    );
};


///THIS IS THE COMPONENT THATS GETTING EXPORTED!!! THE ONE ABOVE THIS SETS UP EACH 'LOCATION CARD COMPONENT'///////////////////////

const SectionTodaysClasses = props => {
    const { rootClassName, className } = props;

    const classes = classNames(rootClassName || css.root, className);

    return (
        <div className={classes}>
            <div className={css.headerTitle}>
                Todays Classes
            </div>
        </div>
    );
};



////////THIS IS CALLING ON THE PROPTYPES PACKAGE TO CHECK IF THE PROVIDED KEY VALUE PAIRS IN THE PROPSTYPE OBJECT
////////MATCH THE PROP INPUTS. FOR EXAMPLE THE PROPS PASSED INTO rootClassName must be a string and will
//////// Throw and error in the console if I were to pass lets say a number to the rootClassName prop.

SectionTodaysClasses.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionTodaysClasses.propTypes = {
    rootClassName: string,
    className: string,
};


/////THIS IS EXPORTING THE SectionTodaysClasses COMPONENT/////////

const sharetribeSdk = require('sharetribe-flex-sdk');

// Create new SDK instance
const sdk = sharetribeSdk.createInstance({
    clientId: '713baf85-2731-4a51-b3a0-2f52c12cc659'
});

// Query first 5 listings
sdk.listings
    .query({ per_page: 5 })
    .then(res => {
        // Print listing titles
        console.log(res);
    })
    .catch(res => {
        // An error occurred
        console.log(`Request failed with status: ${res.status} ${res.statusText}`);
    });

console.log(new Date());

export default SectionTodaysClasses;
