new Vue({
  el: '#campaigns',
  data: function() {
    return {
      showInfo: false,
      showAccordion: false,
      showAddLead: false,
      showPreTitle: false,
      currentView: 'leads',
      showFileTags: false,
      showInlinePDF: false,
      touches: true
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
    toggleTouches: function() {
      this.touches = !this.touches;
    }
  }
});
