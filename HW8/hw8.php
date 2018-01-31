<?php
    header("Access-Control-Allow-Origin:* ");
    header("Content-Type:application/json");

    ini_set('session.cache_limiter','public');
                        session_cache_limiter(false);
                        session_start();
                        //$_session['keyword']=$_session['select_type']=$_session['locations']=$_session['distance'] = "";

                        require_once __DIR__ . '/php-graph-sdk-5.0.0/src/Facebook/autoload.php';
                        $fb = new Facebook\Facebook([
                            'app_id' => '1207432259353304',
                            'app_secret' => '2ee81623a87a531eaa295e4212ee43f7',
                            'default_graph_version' => 'v2.8',
                        ]);

                        $fb->setDefaultAccessToken('EAARKJzroutgBAGZAvZCVIL2Iu82AvfIZClaFt1WYgYdZCWEPNOGprQ0zEhmfKsqZAuK3cLPqfkX63NEjE9wptRtHLLfKIbFNhMITKSsBN8mZBWcr8QnGiVFrWppx9hrGqDVbwdg5wGfrBnke2Xpq7H7U0SdefZCA4sZD');


    if(isset($_GET['users'])){

        $url_page = 'https://graph.facebook.com/v2.8/search?';
        $url_q = "q=".urlencode($_GET['keywords'])."&";
        $url_type = "type=".urlencode("user")."&";
        $url_fields = "fields=".urlencode("id,name,picture.width(700).height(700)");
        $url_accToken = "&access_token=".urlencode("EAAFydU6luHcBAJBdDKM0IXusysZA8ZAeaNjMYaGMCZBb9p3LoDTihW3H2pSzACGdYjiQDNXF9Cv3PKvU5ZCkVKoSJqKykgofoZBRCLIvzvh7IVopGqv7meRt1t6VvnQEUPRrCF63hpuPk2jMMJPZAE8dwrwWiL5FYZD");
        $url = $url_page.$url_q.$url_type.$url_fields.$url_accToken;
                           // var_dump($url);

        $url_search = 'search?'.$url_q.$url_type.$url_fields;

        try {
            $response = $fb->get($url_search);
            //print_r($fb_json);
        } catch(Facebook\Exceptions\FacebookResponseException $e) {
                                                                  // When Graph returns an error
            echo 'Graph returned an error: ' . $e->getMessage();
            exit;
        } catch(Facebook\Exceptions\FacebookSDKException $e) {
                                                                  // When validation fails or other local issues
                                    //echo 'Facebook SDK returned an error: ' . $e->getMessage();
            exit;
        }
        $userEdge = $response->getBody();
                                                                                         //var_dump($userEdge);


        //$userJson = file_get_contents($url);
        //$userJson = json_decode($userJson);

        if(isset($_GET['user_next_page'])) {
            //$userJson = json_decode($userEdge);
            //$nextJson = $userJson->paging->next;
            echo file_get_contents($_GET['user_next_page']);
        } else if(isset($_GET['user_pre_page'])) {
            //$userJson = json_decode($userEdge);
            //$preJson = $userJson->paging->previous;
            echo file_get_contents($_GET['user_pre_page']);
        } else {
            echo $userEdge;
        }
       // echo $userJson;
        //echo "<p>" . $userJson . "</p>";
    }


    if(isset($_GET['pages'])){
            $url_page = 'https://graph.facebook.com/v2.8/search?';
            $url_q = "q=".urlencode($_GET['keywords'])."&";
            $url_type = "type=".urlencode("page")."&";
            $url_fields = "fields=".urlencode("id,name,picture.width(700).height(700)");
            $url_accToken = "&access_token=".urlencode("EAAFydU6luHcBAJBdDKM0IXusysZA8ZAeaNjMYaGMCZBb9p3LoDTihW3H2pSzACGdYjiQDNXF9Cv3PKvU5ZCkVKoSJqKykgofoZBRCLIvzvh7IVopGqv7meRt1t6VvnQEUPRrCF63hpuPk2jMMJPZAE8dwrwWiL5FYZD");
            $url = $url_page.$url_q.$url_type.$url_fields.$url_accToken;
                               // var_dump($url);

            $url_search = 'search?'.$url_q.$url_type.$url_fields;

            try {
                $response = $fb->get($url_search);
                //print_r($fb_json);
            } catch(Facebook\Exceptions\FacebookResponseException $e) {
                                                                      // When Graph returns an error
                echo 'Graph returned an error: ' . $e->getMessage();
                exit;
            } catch(Facebook\Exceptions\FacebookSDKException $e) {
                                                                      // When validation fails or other local issues
                                        //echo 'Facebook SDK returned an error: ' . $e->getMessage();
                exit;
            }
            $pageEdge = $response->getBody();
                                                                                             //var_dump($userEdge);
            $userJson = json_decode($userEdge);

            //$userJson = file_get_contents($url);
            //$userJson = json_decode($userJson);
            if(isset($_GET['page_next_page'])) {
                echo file_get_contents($_GET['page_next_page']);
            } else if(isset($_GET['page_pre_page'])) {
                echo file_get_contents($_GET['page_pre_page']);
            } else {
                echo $pageEdge;
            }
        //echo $pageEdge;
           // echo $userJson;
            //echo "<p>" . $userJson . "</p>";
        }
    if(isset($_GET['events'])){
                $url_page = 'https://graph.facebook.com/v2.8/search?';
                $url_q = "q=".urlencode($_GET['keywords'])."&";
                $url_type = "type=".urlencode("event")."&";
                $url_fields = "fields=".urlencode("id,name,picture.width(700).height(700)");
                $url_accToken = "&access_token=".urlencode("EAAFydU6luHcBAJBdDKM0IXusysZA8ZAeaNjMYaGMCZBb9p3LoDTihW3H2pSzACGdYjiQDNXF9Cv3PKvU5ZCkVKoSJqKykgofoZBRCLIvzvh7IVopGqv7meRt1t6VvnQEUPRrCF63hpuPk2jMMJPZAE8dwrwWiL5FYZD");
                $url = $url_page.$url_q.$url_type.$url_fields.$url_accToken;
                                   // var_dump($url);

                $url_search = 'search?'.$url_q.$url_type.$url_fields;

                try {
                    $response = $fb->get($url_search);
                    //print_r($fb_json);
                } catch(Facebook\Exceptions\FacebookResponseException $e) {
                                                                          // When Graph returns an error
                    echo 'Graph returned an error: ' . $e->getMessage();
                    exit;
                } catch(Facebook\Exceptions\FacebookSDKException $e) {
                                                                          // When validation fails or other local issues
                                            //echo 'Facebook SDK returned an error: ' . $e->getMessage();
                    exit;
                }
                $eventEdge = $response->getBody();
                                                                                                 //var_dump($userEdge);
                $userJson = json_decode($userEdge);

                //$userJson = file_get_contents($url);
                //$userJson = json_decode($userJson);
                if(isset($_GET['event_next_page'])) {
                    echo file_get_contents($_GET['event_next_page']);
                } else if(isset($_GET['event_pre_page'])) {
                    echo file_get_contents($_GET['event_pre_page']);
                } else {
                    echo $eventEdge;
                }
            //echo $eventEdge;
               // echo $userJson;
                //echo "<p>" . $userJson . "</p>";
            }
    if(isset($_GET['places'])){
                    $url_page = 'https://graph.facebook.com/v2.8/search?';
                    $url_q = "q=".urlencode($_GET['keywords'])."&";
                    $url_type = "type=".urlencode("place")."&";
                    $url_fields = "fields=".urlencode("id,name,picture.width(700).height(700)")."&";
                    $url_center = "center=".urlencode($_GET['latitude']).",".urlencode($_GET['longitude']);
                    $url_accToken = "&access_token=".urlencode("EAAFydU6luHcBAJBdDKM0IXusysZA8ZAeaNjMYaGMCZBb9p3LoDTihW3H2pSzACGdYjiQDNXF9Cv3PKvU5ZCkVKoSJqKykgofoZBRCLIvzvh7IVopGqv7meRt1t6VvnQEUPRrCF63hpuPk2jMMJPZAE8dwrwWiL5FYZD");
                    $url = $url_page.$url_q.$url_type.$url_fields.$url_center.$url_accToken;
                                       //var_dump($url);

                    $url_search = 'search?'.$url_q.$url_type.$url_fields.$url_center;

                    try {
                        $response = $fb->get($url_search);
                        //print_r($fb_json);
                    } catch(Facebook\Exceptions\FacebookResponseException $e) {
                                                                              // When Graph returns an error
                        echo 'Graph returned an error: ' . $e->getMessage();
                        exit;
                    } catch(Facebook\Exceptions\FacebookSDKException $e) {
                                                                              // When validation fails or other local issues
                                                //echo 'Facebook SDK returned an error: ' . $e->getMessage();
                        exit;
                    }
                    $placeEdge = $response->getBody();
                                                                                                     //var_dump($userEdge);
                    $userJson = json_decode($userEdge);

                    //$placeEdge = file_get_contents($url);
                    //$userJson = json_decode($userJson);
                    if(isset($_GET['place_next_page'])) {
                        echo file_get_contents($_GET['place_next_page']);
                    } else if(isset($_GET['place_pre_page'])) {
                        echo file_get_contents($_GET['place_pre_page']);
                    } else {
                        echo $placeEdge;
                    }
                //echo $placeEdge;
                   // echo $userJson;
                    //echo "<p>" . $userJson . "</p>";
                }
    if(isset($_GET['groups'])){
                    $url_page = 'https://graph.facebook.com/v2.8/search?';
                    $url_q = "q=".urlencode($_GET['keywords'])."&";
                    $url_type = "type=".urlencode("group")."&";
                    $url_fields = "fields=".urlencode("id,name,picture.width(700).height(700)");
                    $url_accToken = "&access_token=".urlencode("EAAFydU6luHcBAJBdDKM0IXusysZA8ZAeaNjMYaGMCZBb9p3LoDTihW3H2pSzACGdYjiQDNXF9Cv3PKvU5ZCkVKoSJqKykgofoZBRCLIvzvh7IVopGqv7meRt1t6VvnQEUPRrCF63hpuPk2jMMJPZAE8dwrwWiL5FYZD");
                    $url = $url_page.$url_q.$url_type.$url_fields.$url_accToken;
                                       // var_dump($url);

                    $url_search = 'search?'.$url_q.$url_type.$url_fields;

                    try {
                        $response = $fb->get($url_search);
                        //print_r($fb_json);
                    } catch(Facebook\Exceptions\FacebookResponseException $e) {
                                                                              // When Graph returns an error
                        echo 'Graph returned an error: ' . $e->getMessage();
                        exit;
                    } catch(Facebook\Exceptions\FacebookSDKException $e) {
                                                                              // When validation fails or other local issues
                                                //echo 'Facebook SDK returned an error: ' . $e->getMessage();
                        exit;
                    }
                    $groupEdge = $response->getBody();
                                                                                                     //var_dump($userEdge);
                    $userJson = json_decode($userEdge);

                    //$userJson = file_get_contents($url);
                    //$userJson = json_decode($userJson);
                    if(isset($_GET['group_next_page'])) {
                        echo file_get_contents($_GET['group_next_page']);
                    } else if(isset($_GET['group_pre_page'])) {
                        echo file_get_contents($_GET['group_pre_page']);
                    } else {
                        echo $groupEdge;
                    }
                //echo $groupEdge;
                   // echo $userJson;
                    //echo "<p>" . $userJson . "</p>";
                }
    if(isset($_GET['details'])){
                    $album_post_page = 'https://graph.facebook.com/v2.8/';
                    $album_post_id = $_GET["id"] . "?";
                    $album_post_fields = "fields=" . urlencode("id,name,picture.width(700).height(700),albums.limit(5){name,photos.limit(2) {name, picture}},posts.limit(5)");
                    $album_post_token = "&access_token=" . urlencode("EAAFydU6luHcBAJBdDKM0IXusysZA8ZAeaNjMYaGMCZBb9p3LoDTihW3H2pSzACGdYjiQDNXF9Cv3PKvU5ZCkVKoSJqKykgofoZBRCLIvzvh7IVopGqv7meRt1t6VvnQEUPRrCF63hpuPk2jMMJPZAE8dwrwWiL5FYZD");
                    $album_post_url = $album_post_page . $album_post_id . $album_post_fields . $album_post_token;
                            //var_dump($album_post_url);
                    $access_token = urlencode("EAARKJzroutgBAGZAvZCVIL2Iu82AvfIZClaFt1WYgYdZCWEPNOGprQ0zEhmfKsqZAuK3cLPqfkX63NEjE9wptRtHLLfKIbFNhMITKSsBN8mZBWcr8QnGiVFrWppx9hrGqDVbwdg5wGfrBnke2Xpq7H7U0SdefZCA4sZD");

                            $pic_url_search = $album_post_id . $album_post_fields;

                    try {
                        $response = $fb->get($pic_url_search, $access_token);

                                                                                              //print_r($fb_json);
                    } catch(Facebook\Exceptions\FacebookResponseException $e) {
                                                                                              // When Graph returns an error
                                    //echo 'Graph returned an error: ' . $e->getMessage();
                        exit;
                    } catch(Facebook\Exceptions\FacebookSDKException $e) {
                                                                                              // When validation fails or other local issues
                        echo 'Facebook SDK returned an error: ' . $e->getMessage();
                        exit;
                    }

                    $detailEdge = $response->getBody();
                                                                                               //var_dump($userEdge);
                    //$album_post_json = json_decode($userEdge);
                    echo $detailEdge;
                    //echo $album_post_url;
    }

?>