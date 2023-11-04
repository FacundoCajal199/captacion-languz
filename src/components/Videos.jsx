const Video = () => {
    const embedCode =
      '<iframe src="https://www.youtube.com/embed/WDVbzN714F8?si=i10u7QguS1_egvEH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
  
    return (
      <>
        <section className="d-flex justify-content-center py-5">
          <div className="video-container">
            <div dangerouslySetInnerHTML={{ __html: embedCode }} />
          </div>
        </section>
      </>
    );
  };
  
  export default Video;