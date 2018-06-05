new Vue({
  el: '#submissions',
  data: function() {
    return {
      showInfo: false,
      showAccordion: false,
      showHistory: false,
      showAddSubmission: false,
      showPreTitle: false,
      showFileTags: false,
      toggleHold: false,
      showModal: false,
      showInlinePDF: false,
      showActions: false,
      showSidemenuDefault: false
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
    auditMode: function() {
      this.showModal = !this.showModal;
    }
  }
});

new Vue({
  el: '#flow',
  data: function() {
    return {
      showSidemenuDefault: false
    }
  }
});
