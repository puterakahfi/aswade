<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;

class DefaultController extends Controller
{

    /**
     * @Route("/app/example", name="homepage")
     */
    public function indexAction()
    {
        $translated = $this->get('translator')->trans('huhu');

        return new Response($translated);

        return $this->render('default/index.html.twig');
    }

}
