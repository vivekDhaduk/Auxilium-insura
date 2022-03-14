import React from 'react'
import '../css/style.css'
import '../css/easy-responsive-tabs.css'
import '../css/flexslider.css'
import '../css/icons.css'
import '../css/owl.carousel.css'
import '../css/ie7/ie7.css'
import '../css/bootstrep.css'

const Blheader = () => {
  return (
    <div id="page-content">
        <section class="breadcrumb">
            <div class="container">
                <h2>Blog Page</h2>
                <ul>
                    <li><a href="index.html">Home</a> </li>
                    <li><a href="#">Blog Page</a></li>
                </ul>
            </div>
        </section>
        <section class="blog-page">
            <div class="container">
                <div class="row">
                    <div class="col-sm-8">
                        <div class="single-post">
                            <div class="blog-img">
                                <a href="">
                                    <img src="../images/slider-img1.jpg" class="img-responsive"/>
                                </a>
                                <div class="blog-icon"><img src="images/icon2.png"/></div>
                            </div>
                            <h2 class="blog-title">Image Post For Insurance Press</h2>
                            <div class="blog-meta">2 Feb 2018 <a href="">(3) Comments</a></div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris hendrerit fringilla ligula, nec congue leosdsdsd pharetra in.lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris hendrerit fringilla ligula, nec congue leo pharetra in.</p>
                            <div class="blog-btn">
                                <a href="#" class="btn-default">Read More</a>
                                <div class="img-inline"><img src="images/people-03.jpg"/><a href="#">By Linda</a>
                                </div>
                            </div>
                        </div>
                        <div class="single-post">
                            <div class="blog-img">
                                <a href="">
                                    <img src="../images/slider-img3.jpg" class="img-responsive"/>
                                </a>
                                <div class="blog-icon"><img src="images/icon2.png"/></div>
                            </div>
                            <h2 class="blog-title">Gallery Post For Insurance Press</h2>
                            <div class="blog-meta">4 Feb 2018 <a href="">(5) Comments</a></div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris hendrerit fringilla ligula, nec congue leosdsdsd pharetra in.lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris hendrerit fringilla ligula, nec congue leo pharetra in.</p>
                            <div class="blog-btn">
                                <a href="#" class="btn-default">Read More</a>
                                <div class="img-inline"><img src="images/people-03.jpg"/><a href="#">By Linda</a>
                                </div>
                            </div>
                        </div>
                        <div class="single-post">
                            <div class="blog-img">
                                <a href="">
                                    <img src="images/slider-img2.jpg" class="img-responsive"/>
                                </a>
                                <div class="blog-icon"><img src="images/icon1.png"/></div>
                            </div>
                            <h2 class="blog-title">Video Post For Insurance Press</h2>
                            <div class="blog-meta">4 Feb 2018 <a href="">(5) Comments</a></div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris hendrerit fringilla ligula, nec congue leosdsdsd pharetra in.lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris hendrerit fringilla ligula, nec congue leo pharetra in.</p>
                            <div class="blog-btn">
                                <a href="#" class="btn-default">Read More</a>
                                <div class="img-inline"><img src="../images/slider-img4.jpg"/><a href="#">By Linda</a>
                                </div>
                            </div>
                        </div>
                        <div class="quote-post">
                            <div class="quote-img">
                                <img src="images/icon3.png"/>
                            </div>
                            <div class="quote-text">
                                <h5>Vivamus faucibus magna vitae purus blandit, rutrum aliquam turpis bibendum. Ut sit amet sapien dolor. Integer eget orci id leo consectetur iaculis ut vitae neque. Interdum et malesuada fames ac ante ipsum primis in faucibus.</h5>
                                <h6> - Kelly Claw</h6>
                            </div>
                        </div>
                        <div class="single-post">
                            <div class="blog-img">
                                <a href="">
                                    <img src="../images/slider-img4.jpg" class="img-responsive"/>
                                </a>
                                <div class="blog-icon"><img src="images/icon1.png"/></div>
                            </div>
                            <h2 class="blog-title">Audio Post For Insurance Press</h2>
                            <div class="blog-meta">9 Feb 2018 <a href="">(9) Comments</a></div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris hendrerit fringilla ligula, nec congue leosdsdsd pharetra in.lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris hendrerit fringilla ligula, nec congue leo pharetra in.</p>
                            <div class="blog-btn">
                                <a href="#" class="btn-default">Read More</a>
                                <div class="img-inline"><img src="../images/people-03.jpg"/><a href="#">By Linda</a>
                                </div>
                            </div>
                        </div>
                        <div class="text-center">
                            <ul class="pagination ins-page">
                                <li class="active"><span>Previous</span></li>
                                <li><a href="#">1</a></li>
                                <li><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                                <li><a href="#">Next</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="blog-post">
            
                            <h2>Search</h2>
                            <div class="input-group search-text">
                              <input type="text" class="form-control search" placeholder="Search"/>
                              <span class="input-group-btn">
                                <button class="btn btn-default btn-search" type="button"><i class="fa fa-search"></i></button>
                              </span>
                            </div>
                        
                            <h2>Categories</h2>
                            <ul class="category-post">
                                <li>
                                    <a href="#">
                                        <div class="inline-text">
                                            <i class="glyphicon glyphicon-play blue-text"></i>
                                            <h4>House Insurance</h4>
                                            <div class="margin-left-auto blue-text">
                                                <span>(11)</span>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <div class="inline-text">
                                            <i class="glyphicon glyphicon-play blue-text"></i>
                                            <h4>Travel Insurance</h4>
                                            <div class="margin-left-auto blue-text">
                                                <span>(16)</span>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <div class="inline-text">
                                            <i class="glyphicon glyphicon-play blue-text"></i>
                                            <h4>Life Insurance</h4>
                                            <div class="margin-left-auto blue-text">
                                                <span>(16)</span>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <div class="inline-text">
                                            <i class="glyphicon glyphicon-play blue-text"></i>
                                            <h4>Car Insurance</h4>
                                            <div class="margin-left-auto blue-text">
                                                <span>(19)</span>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <div class="inline-text">
                                            <i class="glyphicon glyphicon-play blue-text"></i>
                                            <h4>Business Insurance</h4>
                                            <div class="margin-left-auto blue-text">
                                                <span>(22)</span>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <div class="inline-text">
                                            <i class="glyphicon glyphicon-play blue-text"></i>
                                            <h4>Marketing</h4>
                                            <div class="margin-left-auto blue-text">
                                                <span>(25)</span>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                    
                            <h2>Archives</h2>
                            <div class="input-group search-text">
                              <input type="text" class="form-control search" placeholder="Search archives"/>
                              <span class="input-group-btn">
                                <button class="btn btn-default btn-search" type="button"><i class="glyphicon glyphicon-triangle-bottom"></i></button>
                              </span>
                            </div>
                            
                            <h2>Recent Posts</h2>
                            <ul class="recent-post">
                                <li class="border-bottom">
                                    <a href="#"><h5>Fusce Hendreit et Enim Ord</h5></a>
                                    <h6>2 Feb, 2018</h6>
                                </li>
                                <li class="border-bottom">
                                    <a href="#"><h5>Present Feugiat Metus Tempor</h5></a>
                                    <h6>4 Feb, 2018</h6>
                                </li>
                                <li class="border-bottom">
                                    <a href="#"><h5>Vivamus Placerat Lorem Est</h5></a>
                                    <h6>5 Feb, 2018</h6>
                                </li>
                                <li class="border-bottom">
                                    <a href="#"><h5>Tristique Nonc Neque Eleifend</h5></a>
                                    <h6>7 Feb, 2018</h6>
                                </li>
                            </ul>
                            
                            <h2>Tags</h2>
                            <div class="tags">
                                <a href="">Vestibul</a>
                                <a href="">Justo Temp Orci</a>
                                <a href="">Pellent</a>
                                <a href="">Nam</a>
                                <a href="">consequat elit</a>
                                <a href="">vestibulum act</a>
                                <a href="">consequat donctum</a>
                                <a href="">elit</a>
                                <a href="">molestie</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Blheader