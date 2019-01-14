new Vue({
  el: '#contracting',
  data: function() {
    return {
      showInfo: false,
      showLevels: false,
      selectStates: false,
      currentTab: 'tabOne',
      verifyInformation: false
    }
  },
  methods: {
    toggleForm: function() {
      this.showAccordion = !this.showAccordion;
      this.showPreTitle = !this.showPreTitle;
      if (!this.showInfo || !this.showAccordion) {
        this.showInfo = !this.showInfo;
      }
    },
    preFilledContracting: function() {

    },
    setCurrentTab: function(tab) {
      this.currentTab = tab;
    }
  }
});
