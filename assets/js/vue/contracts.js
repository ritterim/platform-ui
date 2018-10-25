new Vue({
  el: '#contracts',
  data: function() {
    return {
      showInfo: false,
      showAccordion: false,
      showHistory: false,
      showForward: false,
      showAddContract: false,
      showPreTitle: false,
      showFileTags: false,
      toggleHold: false,
      showModal: false,
      currentView: 'exports',
      showMessages: false
    }
  },
  methods: {
    toggleForm: function() {
      this.showAccordion = !this.showAccordion;
      this.showPreTitle = !this.showPreTitle;
      if (!this.showInfo || !this.showAccordion) {
        this.showInfo = !this.showInfo;
      }
    }
  }
});
