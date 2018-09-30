
// Defining form fields

export const fund_fields = [
{
  type: 'text',
  name: 'fund_name',
  iconOrientaion: 'left',
  required: true,
  label: 'Fund Name',
  editable: true,
  props: {}, /* If you want to add some extra props like autoCapitalize or
  autoFocus only available for textInput*/
},
{
  type: 'date',
  mode: 'date', // 'time', 'datetime'
  name: 'start_date',
  label: 'Start Date',
  maxDate: null,
},
{
  type: 'date',
  mode: 'date', // 'time', 'datetime'
  name: 'end_date',
  label: 'End Date',
  maxDate: null,
},
{
  type: 'text',
  iconOrientaion: 'left',
  name: 'description',
  label: 'Description',
  required: true,
  props: {
    multiline: true,
    numberOfLines: 5,
  },
},
{
  type: 'number',
  iconOrientaion: 'left',
  name: 'target',
  required: true,
  label: 'Target Raise Amount',
  //defaultValue: 1,
},
{
  type: 'number',
  iconOrientaion: 'left',
  name: 'minimum_donation',
  required: true,
  label: 'Minimum Donation Amount',
  //defaultValue: 1,
},
{
  type: 'text',
  iconOrientaion: 'left',
  name: 'affiliates',
  required: false,
  label: 'Affiliates (optional)',
},
{
  type: 'email',
  iconOrientaion: 'left',
  name: 'support_email',
  required: true,
  label: 'Support Email',
  // defaultValue: 'www.github.com',
},
]

export const auction_fields = [
  {
    type: 'text',
    icon: 'ios-information-circle-outline',
    iconOrientaion: 'left',
    name: 'auction_name',
    required: true,
    label: 'Auction Name',
    editable: true,
    props: {}, /* If you want to add some extra props like autoCapitalize or
    autoFocus only available for textInput*/
  },
  {
    type: 'date',
    mode: 'date', // 'time', 'datetime'
    name: 'start_date',
    label: 'Start Date',
    maxDate: null,
  },
  {
    type: 'date',
    mode: 'date', // 'time', 'datetime'
    name: 'end_date',
    label: 'End Date',
    maxDate: null,
  },
  {
    type: 'text',
    icon: 'ios-clipboard-outline',
    iconOrientaion: 'left',
    name: 'description',
    label: 'Description',
    required: true,
    props: {
      multiline: true,
      numberOfLines: 5,
    },
  },
  {
    type: 'number',
    icon: 'ios-information-outline',
    iconOrientaion: 'left',
    name: 'item_name',
    required: true,
    label: 'Item Name',
    //defaultValue: 1,
  },
  {
    type: 'text',
    icon: 'ios-copy-outline',
    iconOrientaion: 'left',
    name: 'item_description',
    required: true,
    label: 'Item Description',
  },
  {
    type: 'text',
    icon: 'ios-image-outline',
    iconOrientaion: 'left',
    name: 'item_image',
    required: false,
    label: 'Image of Item',
  },
  {
    type: 'number',
    icon: 'ios-pricetags-outline',
    iconOrientaion: 'left',
    name: 'price',
    required: true,
    label: 'Price',
    //defaultValue: 1,
  },
  {
    type: 'text',
    icon: 'ios-contacts-outline',
    iconOrientaion: 'left',
    name: 'affiliates',
    required: false,
    label: 'Affiliates (optional)',
  },
  {
    type: 'email',
    icon: 'ios-at-outline',
    iconOrientaion: 'left',
    name: 'support_email',
    required: true,
    label: 'Support Email',
    // defaultValue: 'www.github.com',
  },
]

export const event_fields = [
  {
    type: 'text',
    icon: 'ios-information-circle-outline',
    iconOrientaion: 'left',
    name: 'event_name',
    required: true,
    label: 'Event Name',
    editable: true,
    props: {}, /* If you want to add some extra props like autoCapitalize or
    autoFocus only available for textInput*/
  },
  {
    type: 'date',
    mode: 'date', // 'time', 'datetime'
    name: 'date',
    label: 'Date',
    maxDate: null,
  },
  {
    type: 'date',
    mode: 'time', // 'time', 'datetime'
    name: 'time',
    label: 'Time',
    maxDate: null,
  },
  {
    type: 'select', // required
    name: 'event_type', // required
    label: 'Event Type', // required
    options: ['Charity', 'Night Life', 'Corportate', 'Outing', 'Sporting Event', 'Other'],
    //defaultValue: ['Charity'],
  },
  {
    type: 'text',
    icon: 'ios-information-outline',
    iconOrientaion: 'left',
    name: 'venue_name',
    required: true,
    label: 'Venue Name',
    //defaultValue: 1,
  },
  {
    type: 'text',
    icon: 'ios-clipboard-outline',
    iconOrientaion: 'left',
    name: 'description',
    label: 'Description',
    required: true,
    props: {
      multiline: true,
      numberOfLines: 5,
    },
  },
  {
    type: 'text',
    icon: 'ios-pin-outline',
    iconOrientaion: 'left',
    name: 'location',
    required: true,
    label: 'Location',
    //defaultValue: 1,
  },
  {
    type: 'number',
    icon: 'ios-list',
    iconOrientaion: 'left',
    name: 'ticket_amount',
    label: 'Amount of Tickets',
    // defaultValue: 'Bangalore',
  },
  {
    type: 'number',
    icon: 'ios-pricetags-outline',
    iconOrientaion: 'left',
    name: 'price',
    label: 'Ticket Price',
    // defaultValue: 'Bangalore',
  },
  {
    type: 'text',
    icon: 'ios-contacts-outline',
    iconOrientaion: 'left',
    name: 'affiliates',
    required: false,
    label: 'Affiliates (optional)',
  },
  {
    type: 'email',
    icon: 'ios-at-outline',
    iconOrientaion: 'left',
    name: 'support_email',
    required: true,
    label: 'Support Email',
    // defaultValue: 'www.github.com',
  },
]
