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
      showSidemenuDefault: false,
      showDuplicates: false
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
    toggleDuplicates: function() {
      this.showDuplicates = !this.showDuplicates;
    },
    auditMode: function() {
      this.showModal = !this.showModal;
    }
  }
});
