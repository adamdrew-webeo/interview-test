class CampaignService {
  async getCampaigns() {
    return await new Promise((resolve) => {
      resolve(JSON.stringify(
        [{
          'matched': 'false',
          'campaignId': '321',
          'experiences': [{
	    'experienceId': '234',
	    'experienceName': 'Home Page',
	    'personalisation': '...',
	    'createdDate': '2019-12-25T00:00:00.000Z'
          }, {
	    'experienceId': '432',
	    'experienceName': 'Contact Us',
	    'personalisation': '...',
	    'createdDate': '2020-01-12T00:00:00.000Z'
          }]
        }, {
          'matched': 'true',
          'campaignId': '389',
          'experiences': [{
	    'experienceId': '678',
	    'experienceName': 'About Us',
	    'personalisation': '...',
	    'createdDate': '2020-01-13T00:00:00.000Z'
          }, {
	    'experienceId': '542',
	    'experienceName': 'Contact Us',
	    'personalisation': '...',
	    'createdDate': '2020-01-14T00:00:00.000Z'
          }]
        }]
      ));
    });
  }

  async getMatchedCampaigns() {
    // Part 1 Here
  }
}

module.exports = CampaignService;
