const Video = () => {
    const embedCode =
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/jF5CP3MhcYk?si=9g6ik_Vb3D6g0MoI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
  
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