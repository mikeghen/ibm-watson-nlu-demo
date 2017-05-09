const watson = require('../lib/watson')

/**
 * GET /
 */
exports.index = function(req, res) {

  var text = `

  The Mid-South Transdisciplinary Collaborative
Center (TCC) for Health Disparities Research
(U54MD008176) was funded in 2012 by the
National Institute on Minority Health and Health Disparities
to conduct research on the social determinants
that produce disparate health outcomes in vulnerable
populations. The goal of this work is to identify pathways
and mechanisms through which social, economic, cultural,
and environmental factors drive and sustain health
disparities in obesity and related chronic diseases across
the lifespan.
Traditionally, biomedical research has focused on
physiologic processes that impact health, with occasional
emphasis on behavioral and demographic factors. The
Mid-South TCC has adopted a conceptual framework
that considers the social context in which people are born
and live, as this context impacts both the physiologic
processes and behaviors of individuals (Figure 1).
Moreover, the Center promotes an integrative
approach that accounts for multiple simultaneous contributors
to disease etiology, including fundamental
social factors as well as biological and behavioral factors.
Mid-South TCC investigators work across domains
(biological, behavioral, environmental, sociocultural,
and health system) and levels of influence (individual,
interpersonal, community, systems, societal) and collaborate
with stakeholders from multiple sectors. The
Center bridges biomedical and psychosocial research in
a translational effort to place biological and behavioral
mechanisms in a social context, with the ultimate goal of
identifying key intervention points effective in specific
populations.
This integrative approach is evident in the multidisciplinary
nature of the investigative team, which
represents 18 disciplines (e.g., genetics, exercise physiology,
nutrition, bioinformatics, epidemiology, psychology,
medical sociology, and urban planning) across five
branches of science: natural, physical, formal, social,
and applied. Such diversity in scientific perspectives
and methodologies is critical for successful integration
of biomedical, social, and behavioral sciences to generate
high-impact health disparities research.
In addressing the social determinants that drive and
sustain the disparities in obesity and chronic disease, the
Mid-South TCC has adopted a life-course approach,
focusing on critical periods in a person’s life trajectory,
such as the prenatal period, infancy, adolescence, and
advanced age, when the social context may be most salient
in impacting physiology or shaping health behavior.
Two research projects, funded for the full 5-year
duration of the consortium, involve collection of original
data and participation of investigators from multiple
academic institutions. Consistent with the life-course
perspective, these studies address obesity, a risk factor for
chronic diseases, during two critical time points—in
utero/pregnancy and during adolescence:
1. “Examining the Influence of Social Determinants of
Health on Gestational Weight Gain and Maternal and
Child Outcomes among Black and White Women in
the Deep South”; and
2. “Molecular and Social Determinants in Obesity and
Metabolic Disorders Among Developing Youth.”
0749-3797/$36.00
http://dx.doi.org/10.1016/j.amepre.2016.09.032
This article is part of a supplement issue titled Social Determinants of
Health: An Approach to Health Disparities Research.
From the 1
Division of Preventive Medicine, University of Alabama at
Birmingham, Birmingham, Alabama; 2
Department of Nutrition Sciences,
University of Alabama at Birmingham, Birmingham, Alabama; 3
Department
of Sociology, University of Alabama at Birmingham, Birmingham,
Alabama; 4
School of Medicine, California University of Science and
Medicine, Colton, California; 5
Department of Health Sciences, Jackson
State University, Jackson, Mississippi; 6
Department of Medicine, University
of Mississippi Medical Center, Jackson, Mississippi; 7
Department of
Genetics, Louisiana State University Health Sciences Center, New Orleans,
Louisiana; and 8
Division of Gynecologic Oncology, University of Alabama
at Birmingham, Birmingham, Alabama
Address correspondence to: Mona N. Fouad, MD, MPH, Division of
Preventive Medicine, University of Alabama at Birmingham, 1717 11th
Avenue South, Birmingham AL 35205. E-mail: mfouad@uab.edu.
& 2016 Published by Elsevier Inc. on behalf of American Journal of Preventive Medicine Am J Prev Med 2017;52(1S1):S1–S4 S1
Smaller projects of 1 or 2 years duration are funded as
well, through a competitive peer-review process similar
to the one used by NIH. These pilot studies examine the
interplay between social determinants of health (SDH)
and biological processes that results in disparate health
outcomes (e.g., “Metabolic and Social Determinants of
Racial Disparity in Hemoglobin Glycation”) or the
complex interaction among SDH, physiology, and behavior
(e.g., “Adverse Effects of Life Stress on Obesity and
Disease Risk, Mediated by Diet and Oxidative Stress” and
“Behavioral and Social Factors Impact Mitochondrial
Dysfunction and Obesity in HIV-Infected Women”).
Other studies are focused on assessing SDH in specific
populations, which also generates data resources to be
used in future research (e.g., “Assessing the Social
Determinants of Obesity for Latino Immigrants” and
“Monitoring Social Determinants of Obesity Outcomes
in a Community Clinic”). A group of projects explore the
use of technology to reduce obesity or disparities in
chronic diseases (e.g., “Kid Koders for Health: Promoting
Physical Activity among Underserved Youth,” “Bikeshare
for Low-Income Urban Communities: A Mixed
Methods Feasibility Study,” and “Mobile Mindfulness
Training to Reduce Chronic Health Disparities in
Louisiana Women”). Finally, some projects test
community-based interventions in the thematic area of
the Center (e.g., “A Family-Based Intervention to Reduce
Obesity in the Black Belt” and “Healthy Roots for You:
A Social Marketing Campaign to Increase Fruit and
Vegetable Purchases”). Studies using data from existing
national cohorts and cohorts established by the participating
institutions also are supported. Examples of
funded concepts are listed in Table 1.
Although the Mid-South TCC includes programs and
cores that are traditional for large research enterprises,
such as Administrative Core, Research and Pilot Projects
Program, Biostatistics and Study Design Core, Academic–Community
Engagement Core, and Dissemination
Core, one of its most unique features is the SDH
Measurement Core (SDH Core), which provides theoretical
and methodological expertise, measurement tools,
and data products related to SDH. Measuring SDH
constitutes a methodological challenge. Additionally,
understanding the etiology of multifactorial conditions,
such as obesity and chronic disease, calls for the use of
multidisciplinary scientific methods and instruments. To
help investigators overcome these challenges, the SDH
Core has established a resource bank with relevant
publications; a toolkit with validated scales, indices,
instruments, and supporting documentation related to
specific SDH; a list of secondary data sources for SDH
research; a database with region-specific SDH and health
outcomes data; and a GIS mapping resource. Examples of
measures in the toolkit include indicators of SES
(income, education, occupation), income inequality,
work opportunities, material well-being, deprivation,
Figure 1. Conceptual framework adopted by the Mid-South Transdisciplinary Collaborative Center (TCC).
Source: Solar O, Irwin A. A conceptual framework for action on the social determinants of health. Social Determinants of Health Discussion Paper 2
(Policy and Practice). Geneva: WHO, 2010.1
S2 Fouad et al / Am J Prev Med 2017;52(1S1):S1–S4
www.ajpmonline.org
food security, food habits and nutrition, exercise, stress,
depression, hostility, environmental exposures (toxins,
pollution), built environment, neighborhood living conditions
(concentrated disadvantage, residential segregation,
physical safety, walkability, housing conditions,
infrastructural decay, recreational environment, nutritional
environment), segregation, discrimination, social
capital, social cohesion, social exclusion, social support,
civic engagement, and collective efficacy. Additionally,
the SDH Core has developed standardized sociodemographic
questions and measures that are used across all
TCC projects to collect uniform data on race/ethnicity,
sex, age, education, employment status, household
income, health insurance status, marital status, and
household size. The SDH Core thus provides one-stop
access to a wealth of tools and expertise to support
research on the SDH. Its resources are also available to
investigators interested in including measures of SDH in
their future research, which increases the SDH Core’s
long-term impact on advancing knowledge.
The Mid-South TCC has served as an enabling platform
for team science that addresses a complex problem—
health disparities—through a complex systems approach
that involves collaboration between investigators from
diverse scientific backgrounds. Some research findings
have already been published2–7
; the papers presented here
add to this body of knowledge. For example, one article
examines the relationship between street connectivity and
obesity risk as evidenced by data obtained from electronic
health records.8 Linking electronic health records with
SDH and environmental measures could further understanding
of the etiology of obesity and chronic disease and
suggest feasible strategies for addressing the disparities in
these conditions. Another article examines the association
between perceived discrimination and obesity among
African Americans, clarifying the role of perceived stress
and health behaviors.9 The authors report that health
behaviors lead to suppression, rather than mediation,
between perceived discrimination and weight status and
between stress and weight status. Yet another article
clarifies the contributions of race, income, education,
and perceived discrimination to systemic inflammation
measured by four biomarkers.10 The findings suggest that
inflammation-reducing interventions should focus on
African Americans and individuals facing socioeconomic
disadvantages, especially low education. These are just a
few examples of the Mid-South TCC’s focus on identifying
some of the root causes of disparities in obesity and
chronic diseases. The results from this work should be
used to inform approaches to health care, public health,
and policy that affect the health and well-being of all.

  `;
// Article Source:
// https://www.researchgate.net/profile/Gabriela_Oates/publication/311652667_Advancing_the_Science_of_Health_Disparities_Through_Research_on_the_Social_Determinants_of_Health/links/5852c56608ae95fd8e1d71d8.pdf

  watson.understandText(text, function(response){

    res.render('home', {
      title: 'Home',
      keywords: response.keywords,
      entities: response.entities,
      categories: response.categories, // Not implemented in UI
      relations: response.relations,   // Not implemented in UI
      text: text
    });

  });

};
