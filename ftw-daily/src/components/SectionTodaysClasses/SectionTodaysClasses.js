import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { lazyLoadWithDimensions } from '../../util/contextHelpers';

import { NamedLink } from '../../components';

import css from './SectionTodaysClasses.css';
import { apiEndDateToPickerDate } from '../FieldDateRangeInput/DateRangeInput.helpers';
import { sortConfig } from '../../marketplace-custom-config';
import { LISTING_STATE_CLOSED } from '../../util/types';
import listingPageReducer from '../../containers/ListingPage/ListingPage.duck';



class TodaysClassImage extends Component {
    render() {
        const { alt, ...rest } = this.props;
        return <img alt={alt} {...rest} />;
    }
}
const LazyImage = lazyLoadWithDimensions(TodaysClassImage);




// ----------------------------------------------

//THIS FUNCTION IS KIND OF LIKE A FILTER. WHEN ITS RAN (WHEN PAGE LOADS) IT FILTERS CLASSES
//BY DAY AND RETURNS RESULTS TO THE PAGE.


//onLoad Run CheckTodaysClasses
//lets try to think of it as a button though that says 'click here for todays classes'
//when clicked, that button would typicall bring you 
//to the results page that filters classes by todays date.

//right now the sectionsClasses link are filtering classes by keyword because i have
//the link set up as localhost:3000/keyword={whatever};
//so lets make this 'button' which in comparison the the sectionsClasses compoentnt  
//pics of cooking and art
//or whatever act like a button. So lets make our 'button' 
//take you to a results page that shows todays classes.
//but then, we dont want it to bring us to the results page.
//we want the results to output in this component.
//so maybe instead of the <Namedlink name = "SearchPage"></Namedlink>


// ----------------------------------------------




// I need to pull todays classes from an api. there is some sort
// of api that is storing all the listings.
//lets say that API object is called listings.
//within the listings may be an array of all listings. [listing 1, listing 2]
//each listing is an object of info
//listing {
// date: 5/12/20
// title: 'cooking pasta with jeff'
// time: 4:00
// cost: "$4.00"
//description: 'lorem ipsum dolar submi '
//}

//we want to make a
//const apiKey = '105u38r09'
//const apiEndpoint = 'endpoint.com/{apikey};
// fetch (apiEndpoing () => data)
// const todaysDate = date new()
//loop through each data.listing. If data.listing.date === todaysDate then print that shit.
//  <div>
//{listings.forEach(listing () =>{
//if listing.date === todaysDate{
/* <div class=listingCardContainer>
<img class="listing-image"></img>
    <div className=listingInfo>
        <h1>listing title</h1>
        <h2>listing description</h2>
    </div>
</div> */
//}
//})}

// </div>






//CheckTodaysClasses () {
//runs the 'by date' filter and returns results to front page.
// }



///i will need a fucntion that says if (classesToday = true) than display classesToday
///maybe something like function checkIfTodayHasClasses(){
// const today = date new()  or something
//today = 5/15/2020
//maybe its const today = {date: new date(), classes: [...props]}

//today is an object {
// classes: [ this must come from an api or something]
//}

//if (today.classes) then loop through array and print out each class.



//}









///THIS COMPONENT IS REALLY JUST KIND OF A FUNCTION AND IS CALLED ON LIKE A FUNCTION IN THE COMPONENT UNDERNEATH/////////
const locationLink = (name, image, searchQuery) => {
    const nameText = <span className={css.locationName}>{name}</span>;
    return (


        //this named link wraps around the entire component like an <a></a> and brings
        //you to the ''SearchPage'' 
        <NamedLink name="SearchPage" to={{ search: searchQuery }} className={css.location}>
            <div className={css.imageWrapper}>
                <div className={css.aspectWrapper}>
                    <LazyImage src={image} alt={name} className={css.locationImage} />
                </div>
            </div>
            <div className={css.linkText}>
                <FormattedMessage
                    id="SectionLocations.listingsInLocation"
                    values={{ location: nameText }}
                />
            </div>
        </NamedLink>





    );
};


///THIS IS THE COMPONENT THATS GETTING EXPORTED!!! THE ONE ABOVE THIS SETS UP EACH 'LOCATION CARD COMPONENT'///////////////////////

const SectionLocations = props => {
    const { rootClassName, className } = props;

    const classes = classNames(rootClassName || css.root, className);

    return (
        <div className={classes}>
            <div className={css.title}>
                <FormattedMessage id="SectionLocations.title" />
            </div>
            <div className={css.locations}>
                {locationLink(
                    'FUCK ME',
                    helsinkiImage,
                    '?address=Helsinki%2C%20Finland&bounds=60.2978389%2C25.254484899999966%2C59.9224887%2C24.782875800000056&origin=60.16985569999999%2C24.93837910000002'
                )}
                {locationLink(
                    'Rovaniemi',
                    rovaniemiImage,
                    '?address=Rovaniemi%2C%20Finland&bounds=67.18452510000002%2C27.32667850000007%2C66.1553745%2C24.736871199999996&origin=66.50394779999999%2C25.729390599999988'
                )}
                {locationLink(
                    'Ruka',
                    rukaImage,
                    '?address=Ruka%2C%20Finland&bounds=66.1704578%2C29.14246849999995%2C66.1614402%2C29.110453699999994&origin=66.16594940000002%2C29.12646110000003'
                )}
            </div>
        </div>
    );
};

SectionLocations.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionLocations.propTypes = {
    rootClassName: string,
    className: string,
};

export default SectionLocations;