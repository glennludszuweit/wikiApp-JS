class WYSIWYG {
  summerNote(id) {
    $(id).summernote({
      placeholder: 'players description ...',
      tabsize: 2,
      height: 300,
      toolbar: [
        ['style', ['style']],
        ['font', ['bold', 'underline', 'clear']],
        ['color', ['color']],
        ['para', ['ul', 'ol', 'paragraph']],
        ['table', ['table']],
        ['insert', ['link', 'picture', 'video']],
        ['view', ['codeview', 'help']],
      ],
    });
  }
}

export default new WYSIWYG();
