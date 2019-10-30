"use strict";

var Presets = {
    Common: {
        Strings: {
            title: {
                en: "Cabri Express"
            }
        }
    },
    Primary: {
        Numbers: {
            MaxInputDigits:     10,        // 9 999 999 999
            MaxPrecision:       2,
            LimitPrecisionInput: true,
            Precision:          2,
            CanSetPrecision:    false,
            InfinitySymbol:     "###",
            MaxCapacity:        100000000,          // 100 000 000,  i.e. <= 99 999 999  cf doc MEN "Utiliser les calculatrices en classe" Annexe 2
            ScientificNotation: false,
            AdvUnitsManagement: false,
        },
        Calculator: {
            Docked:         true,
            GraphButtons:   false,
            DivisionSign:   "\u00F7",               // DIVISION SIGN  ÷
            Level:          1
        },
        Strings: {
            "license_message" : {
                en: "I have read and agree to the license conditions.<br><a href='license/en/index.html' target='_blank'>Click on this link to read it</a>.",
                fr: "J'ai lu et j'accepte les termes et les conditions de la licence.<br><a href='license/fr/index.html' target='_blank'>Cliquez sur ce lien pour la consulter</a>."
            },
            "help_url": {
                fr: "help/primary/fr"
            },
            vector_tool: {
                en: "Arrow",
                fr: "Flèche"
            },
            dilation_tool: {
                de: ["Zentrische Streckung", "Streckung"],
                en: ["Enlargement", "Enlarg."],
                es: "Ampliación",
                fr: ["Agrandissement<BR>réduction", "Aggr.-Réduc."],
                it: ["Ingrandimento/riduzione","Ingrand.<BR>Riduz."],
            }
        }
        ,Piles: [
            [//teacher
                { toolid: "text_zone_tool", nametotranslate: "text_zone_tool", defaultname: "text zone", icongraphic: "text_zone_tool" },
                { toolid: "text_note_tool", nametotranslate: "text_note_tool", defaultname: "text note", icongraphic: "text_note_tool" },
                { toolid: "mcq_tool", nametotranslate: "mcq_tool", defaultname: "MCQ", icongraphic: "mcq_tool" },
                { toolid: "boolean_property_match_tool", nametotranslate: "boolean_property_match_tool", defaultname: "geometric matching", icongraphic: "boolean_property_match_tool"},
            ],
            [//1
                { toolid: "pointer_tool", nametotranslate: "pointer_tool", defaultname: "pointer", icongraphic: "pointer_tool" },
                { toolid: "mask_unlocked_tool", nametotranslate: "mask_tool", defaultname: "hide / show", icongraphic: "mask_tool" },
                { toolid: "delete_tool", nametotranslate: "delete_tool", defaultname: "delete", icongraphic: "delete_tool" },
                { toolid: "block_pattern_tool", nametotranslate: "block_pattern_tool", defaultname: "block_pattern",icongraphic: "block_pattern_tool" },
                { toolid: "tangram_block_tool", nametotranslate: "tangram_block_tool", defaultname: "tangram_block",icongraphic: "tangram_block_tool" },
                { toolid: "template_tool",      nametotranslate: "template_tool",      defaultname: "template",     icongraphic: "template_tool" },
                //{ toolid: "redefinition_tool", nametotranslate: "redefinition_tool", defaultname: "redefinition", icongraphic: "redefinition_tool" }
            ],
            [//2
                { toolid: "point_tool", nametotranslate: "point_tool", defaultname: "point", icongraphic: "point_tool" },
                { toolid: "point_s_inter_tool", nametotranslate: "point_s_inter_tool", defaultname: "point", icongraphic: "point_s_inter_tool" },
                { toolid: "point_middle_tool", nametotranslate: "point_middle_tool", defaultname: "point", icongraphic: "point_middle_tool" },
                { toolid: "measurement_transfer_tool", nametotranslate: "measurement_transfer_tool", defaultname: "point", icongraphic: "measurement_transfer_tool" }
            ],
            [//3
                { toolid: "segment_tool", nametotranslate: "segment_tool", defaultname: "point", icongraphic: "segment_tool" },
                { toolid: "line_tool", nametotranslate: "line_tool", defaultname: "point", icongraphic: "line_tool" },
                { toolid: "ray_tool", nametotranslate: "ray_tool", defaultname: "point", icongraphic: "ray_tool" },
                //{ toolid: "vector_tool", nametotranslate: "vector_tool", defaultname: "point", icongraphic: "vector_tool" },
                { toolid: "perpendicular_line_tool", nametotranslate: "perpendicular_line_tool", defaultname: "point", icongraphic: "perpendicular_line_tool" },
                { toolid: "parallel_line_tool", nametotranslate: "parallel_line_tool", defaultname: "point", icongraphic: "parallel_line_tool" },
                { toolid: "perpendicular_bisector_tool", nametotranslate: "perpendicular_bisector_tool", defaultname: "point", icongraphic: "perpendicular_bisector_tool" },
                { toolid: "angle_bisector_tool", nametotranslate: "angle_bisector_tool", defaultname: "point", icongraphic: "angle_bisector_tool" }
            ],
            [//4
                { toolid: "circle_and_compass_tool", nametotranslate: "circle_and_compass_tool", defaultname: "point", icongraphic: "circle_and_compass_tool" },
                { toolid: "arc_of_circle_tool", nametotranslate: "arc_of_circle_tool", defaultname: "point", icongraphic: "arc_of_circle_tool" },
                { toolid: "circle_sector_tool", nametotranslate: "circle_sector_tool", defaultname: "point", icongraphic: "circle_sector_tool" },
                { toolid: "virtual_compass_tool", nametotranslate: "virtual_compass_tool", defaultname: "compass", icongraphic: "virtual_compass_tool" }
            ],
            [//5
                { toolid: "triangle_tool", nametotranslate: "triangle_tool", defaultname: "point", icongraphic: "triangle_tool" },
                { toolid: "quadrilateral_tool", nametotranslate: "quadrilateral_tool", defaultname: "point", icongraphic: "quadrilateral_tool" },
                { toolid: "polygon_tool", nametotranslate: "polygon_tool", defaultname: "point", icongraphic: "polygon_tool" },
                { toolid: "rp_triangle_tool", nametotranslate: "rp_triangle_tool", defaultname: "point", icongraphic: "rp_triangle_tool" },
                { toolid: "rp_square_tool", nametotranslate: "rp_square_tool", defaultname: "point", icongraphic: "rp_square_tool" },
                { toolid: "rp_pentagon_tool", nametotranslate: "rp_pentagon_tool", defaultname: "point", icongraphic: "rp_pentagon_tool" },
                { toolid: "rp_hexagon_tool", nametotranslate: "rp_hexagon_tool", defaultname: "point", icongraphic: "rp_hexagon_tool" },
                { toolid: "rp_octagon_tool", nametotranslate: "rp_octagon_tool", defaultname: "point", icongraphic: "rp_octagon_tool" }
            ],
            [//6 Polyhedra
                { toolid: "prism_by_polygon_and_number_tool", nametotranslate: "prism_by_polygon_and_number_tool", defaultname: "point", icongraphic: "prism_by_polygon_and_number_tool" },
                { toolid: "pyramid_by_polygon_and_number_tool", nametotranslate: "pyramid_by_polygon_and_number_tool", defaultname: "point", icongraphic: "pyramid_by_polygon_and_number_tool" },
                { toolid: "cylinder_by_circle_and_number_tool", nametotranslate: "cylinder_by_circle_and_number_tool", defaultname: "point", icongraphic: "cylinder_by_circle_and_number_tool" },
                { toolid: "cone_by_circle_and_number_tool", nametotranslate: "cone_by_circle_and_number_tool", defaultname: "point", icongraphic: "cone_by_circle_and_number_tool" },
                { toolid: "sphere_by_point_and_number_tool", nametotranslate: "sphere_by_point_and_number_tool", defaultname: "point", icongraphic: "sphere_by_point_and_number_tool" },
                { toolid: "rp_tetrahedron_tool", nametotranslate: "rp_tetrahedron_tool", defaultname: "point", icongraphic: "rp_tetrahedron_tool" },
                { toolid: "rp_cube_tool", nametotranslate: "rp_cube_tool", defaultname: "point", icongraphic: "rp_cube_tool" },
                { toolid: "rp_octahedron_tool", nametotranslate: "rp_octahedron_tool", defaultname: "point", icongraphic: "rp_octahedron_tool" },
                { toolid: "rp_dodecahedron_tool", nametotranslate: "rp_dodecahedron_tool", defaultname: "point", icongraphic: "rp_dodecahedron_tool" },
                { toolid: "rp_icosahedron_tool", nametotranslate: "rp_icosahedron_tool", defaultname: "point", icongraphic: "rp_icosahedron_tool" },
                { toolid: "free_net_oneclic_tool", nametotranslate: "free_net_oneclic_tool", defaultname: "point", icongraphic: "free_net_oneclic_tool" }
            ],
            [//7 Measures
                { toolid: "length_tool", nametotranslate: "length_tool", defaultname: "point", icongraphic: "length_tool" },
                { toolid: "distance_tool", nametotranslate: "distance_tool", defaultname: "point", icongraphic: "distance_tool" },
                { toolid: "area_tool", nametotranslate: "area_tool", defaultname: "point", icongraphic: "area_tool" },
                { toolid: "volume_tool", nametotranslate: "volume_tool", defaultname: "point", icongraphic: "volume_tool" },
                { toolid: "angle_of_3_points_tool", nametotranslate: "angle_of_3_points_tool", defaultname: "point", icongraphic: "angle_of_3_points_tool" },
                //{ toolid: "coordinates_equation_tool", nametotranslate: "coordinates_equation_tool", defaultname: "point", icongraphic: "coordinates_equation_tool" }
            ],
            [//8 Transformations
                { toolid: "axial_symetry_tool", nametotranslate: "axial_symetry_tool", defaultname: "point", icongraphic: "axial_symetry_tool" },
                { toolid: "central_symetry_tool", nametotranslate: "central_symetry_tool", defaultname: "point", icongraphic: "central_symetry_tool" },
                { toolid: "translation_tool", nametotranslate: "translation_tool", defaultname: "point", icongraphic: "translation_tool" },
                { toolid: "rotation_tool", nametotranslate: "rotation_tool", defaultname: "point", icongraphic: "rotation_tool" },
                { toolid: "dilation_tool", nametotranslate: "dilation_tool", defaultname: "point", icongraphic: "dilation_tool" }
            ],
            [//9
                { toolid: "text_tool", nametotranslate: "text_tool", defaultname: "point", icongraphic: "text_tool" },
                { toolid: "free_number_tool", nametotranslate: "free_number_tool", defaultname: "point", icongraphic: "free_number_tool" },
                { toolid: "slider_tool", nametotranslate: "slider_tool", defaultname: "point", icongraphic: "slider_tool" },
                //{ toolid: "expression_tool", nametotranslate: "expression_tool", defaultname: "point", icongraphic: "expression_tool" }
            ],

            [//10
                //{ toolid: "axis_tool", nametotranslate: "axis_tool", defaultname: "point", icongraphic: "axis_tool" },
                { toolid: "grid_tool", nametotranslate: "grid_tool", defaultname: "point", icongraphic: "grid_tool" },
                { toolid: "trace_tool", nametotranslate: "trace_tool", defaultname: "Trace", icongraphic: "trace_tool" },
                //{ toolid: "locus_tool", nametotranslate: "locus_tool", defaultname: "point", icongraphic: "locus_tool" },
                //{ toolid: "graph_tool", nametotranslate: "graph_tool", defaultname: "point", icongraphic: "graph_tool" }
            ]

        ]
    },
    Secondary: {
        Numbers: {
            MaxInputDigits:     15,            // 999 999 999 999 999 + 1 == 10^15
            MaxPrecision:       10,
            LimitPrecisionInput: false,
            Precision:          10,
            CanSetPrecision:    true,
            InfinitySymbol:     "\u221E",
            MaxCapacity:        Infinity,
            ScientificNotation: true,
            AdvUnitsManagement: true
        },
        Calculator: {
            Docked:         true,
            GraphButtons:   true,
            DivisionSign:   "/",
            Level:          2
        }
        ,Strings: {
            "license_message" : {
                en: "I have read and agree to the license conditions.<br><a href='license/en/index.html' target='_blank'>Click on this link to read it</a>.",
                fr: "J'ai lu et j'accepte les termes et les conditions de la license.<br><a href='license/fr/index.html' target='_blank'>Cliquez sur ce lien pour la consulter</a>."
            }
        }
        ,Piles: [
            [//teacher
                { toolid: "text_zone_tool", nametotranslate: "text_zone_tool", defaultname: "text zone", icongraphic: "text_zone_tool" },
//                { toolid: "text_note_tool", nametotranslate: "text_note_tool", defaultname: "text note", icongraphic: "text_note_tool" },
//                { toolid: "mcq_tool", nametotranslate: "mcq_tool", defaultname: "MCQ", icongraphic: "mcq_tool" },
                { toolid: "geometric_matching_tool", nametotranslate: "geometric_matching_tool", defaultname: "geometric matching", icongraphic: "geometric_matching_tool"},
            ],
            [//1
                { toolid: "pointer_tool", nametotranslate: "pointer_tool", defaultname: "pointer", icongraphic: "pointer_tool" },
                { toolid: "mask_unlocked_tool", nametotranslate: "mask_tool", defaultname: "hide / show", icongraphic: "mask_tool" },
                { toolid: "delete_tool", nametotranslate: "delete_tool", defaultname: "delete", icongraphic: "delete_tool" },
                { toolid: "redefinition_tool", nametotranslate: "redefinition_tool", defaultname: "redefinition", icongraphic: "redefinition_tool" }
            ],
            [//2
                { toolid: "point_tool", nametotranslate: "point_tool", defaultname: "point", icongraphic: "point_tool" },
                { toolid: "point_s_inter_tool", nametotranslate: "point_s_inter_tool", defaultname: "point", icongraphic: "point_s_inter_tool" },
                { toolid: "point_middle_tool", nametotranslate: "point_middle_tool", defaultname: "point", icongraphic: "point_middle_tool" },
                { toolid: "measurement_transfer_tool", nametotranslate: "measurement_transfer_tool", defaultname: "point", icongraphic: "measurement_transfer_tool" }
            ],
            [//3
                { toolid: "segment_tool", nametotranslate: "segment_tool", defaultname: "point", icongraphic: "segment_tool" },
                { toolid: "line_tool", nametotranslate: "line_tool", defaultname: "point", icongraphic: "line_tool" },
                { toolid: "ray_tool", nametotranslate: "ray_tool", defaultname: "point", icongraphic: "ray_tool" },
                { toolid: "vector_tool", nametotranslate: "vector_tool", defaultname: "point", icongraphic: "vector_tool" },
                { toolid: "perpendicular_line_tool", nametotranslate: "perpendicular_line_tool", defaultname: "point", icongraphic: "perpendicular_line_tool" },
                { toolid: "parallel_line_tool", nametotranslate: "parallel_line_tool", defaultname: "point", icongraphic: "parallel_line_tool" },
                { toolid: "perpendicular_bisector_tool", nametotranslate: "perpendicular_bisector_tool", defaultname: "point", icongraphic: "perpendicular_bisector_tool" },
                { toolid: "angle_bisector_tool", nametotranslate: "angle_bisector_tool", defaultname: "point", icongraphic: "angle_bisector_tool" },
                { toolid: "reg_line_tool", nametotranslate: "reg_line_tool", defaultname: "refression", icongraphic: "reg_line_tool" }
            ],
            [//4
                { toolid: "circle_and_compass_tool", nametotranslate: "circle_and_compass_tool", defaultname: "point", icongraphic: "circle_and_compass_tool" },
                { toolid: "arc_of_circle_tool", nametotranslate: "arc_of_circle_tool", defaultname: "point", icongraphic: "arc_of_circle_tool" },
                { toolid: "circle_sector_tool", nametotranslate: "circle_sector_tool", defaultname: "point", icongraphic: "circle_sector_tool" },
                { toolid: "virtual_compass_tool", nametotranslate: "virtual_compass_tool", defaultname: "compass", icongraphic: "virtual_compass_tool" },
                { toolid: "conic_parabola_tool", nametotranslate: "conic_parabola_tool", defaultname: "parabola", icongraphic: "conic_parabola_tool" },
                { toolid: "conic_ellipse_tool", nametotranslate: "conic_ellipse_tool", defaultname: "ellipse", icongraphic: "conic_ellipse_tool" },
                { toolid: "conic_hyperbola_tool", nametotranslate: "conic_hyperbola_tool", defaultname: "hyperbola", icongraphic: "conic_hyperbola_tool" },
                { toolid: "conic_by_5_points_tool", nametotranslate: "conic_by_5_points_tool", defaultname: "conic", icongraphic: "conic_by_5_points_tool" }
            ],
            [//5
                { toolid: "triangle_tool", nametotranslate: "triangle_tool", defaultname: "point", icongraphic: "triangle_tool" },
                { toolid: "quadrilateral_tool", nametotranslate: "quadrilateral_tool", defaultname: "point", icongraphic: "quadrilateral_tool" },
                { toolid: "polygon_tool", nametotranslate: "polygon_tool", defaultname: "point", icongraphic: "polygon_tool" },
                { toolid: "rp_triangle_tool", nametotranslate: "rp_triangle_tool", defaultname: "point", icongraphic: "rp_triangle_tool" },
                { toolid: "rp_square_tool", nametotranslate: "rp_square_tool", defaultname: "point", icongraphic: "rp_square_tool" },
                { toolid: "rp_pentagon_tool", nametotranslate: "rp_pentagon_tool", defaultname: "point", icongraphic: "rp_pentagon_tool" },
                { toolid: "rp_hexagon_tool", nametotranslate: "rp_hexagon_tool", defaultname: "point", icongraphic: "rp_hexagon_tool" },
                { toolid: "rp_octagon_tool", nametotranslate: "rp_octagon_tool", defaultname: "point", icongraphic: "rp_octagon_tool" }
            ],
            [//6 Polyhedra
                { toolid: "prism_by_polygon_and_number_tool", nametotranslate: "prism_by_polygon_and_number_tool", defaultname: "point", icongraphic: "prism_by_polygon_and_number_tool" },
                { toolid: "pyramid_by_polygon_and_number_tool", nametotranslate: "pyramid_by_polygon_and_number_tool", defaultname: "point", icongraphic: "pyramid_by_polygon_and_number_tool" },
                { toolid: "cylinder_by_circle_and_number_tool", nametotranslate: "cylinder_by_circle_and_number_tool", defaultname: "point", icongraphic: "cylinder_by_circle_and_number_tool" },
                { toolid: "cone_by_circle_and_number_tool", nametotranslate: "cone_by_circle_and_number_tool", defaultname: "point", icongraphic: "cone_by_circle_and_number_tool" },
                { toolid: "sphere_by_point_and_number_tool", nametotranslate: "sphere_by_point_and_number_tool", defaultname: "point", icongraphic: "sphere_by_point_and_number_tool" },
                { toolid: "rp_tetrahedron_tool", nametotranslate: "rp_tetrahedron_tool", defaultname: "point", icongraphic: "rp_tetrahedron_tool" },
                { toolid: "rp_cube_tool", nametotranslate: "rp_cube_tool", defaultname: "point", icongraphic: "rp_cube_tool" },
                { toolid: "rp_octahedron_tool", nametotranslate: "rp_octahedron_tool", defaultname: "point", icongraphic: "rp_octahedron_tool" },
                { toolid: "rp_dodecahedron_tool", nametotranslate: "rp_dodecahedron_tool", defaultname: "point", icongraphic: "rp_dodecahedron_tool" },
                { toolid: "rp_icosahedron_tool", nametotranslate: "rp_icosahedron_tool", defaultname: "point", icongraphic: "rp_icosahedron_tool" },
                { toolid: "free_net_oneclic_tool", nametotranslate: "free_net_oneclic_tool", defaultname: "point", icongraphic: "free_net_oneclic_tool" }
            ],
            [//7 Measures
                { toolid: "length_tool", nametotranslate: "length_tool", defaultname: "point", icongraphic: "length_tool" },
                { toolid: "distance_tool", nametotranslate: "distance_tool", defaultname: "point", icongraphic: "distance_tool" },
                { toolid: "area_tool", nametotranslate: "area_tool", defaultname: "point", icongraphic: "area_tool" },
                { toolid: "volume_tool", nametotranslate: "volume_tool", defaultname: "point", icongraphic: "volume_tool" },
                { toolid: "angle_of_3_points_tool", nametotranslate: "angle_of_3_points_tool", defaultname: "point", icongraphic: "angle_of_3_points_tool" },
                { toolid: "slope_tool", nametotranslate: "slope_tool", defaultname: "point", icongraphic: "slope_tool" },
                { toolid: "coordinates_equation_tool", nametotranslate: "coordinates_equation_tool", defaultname: "point", icongraphic: "coordinates_equation_tool" }
            ],
            [//8 Transformations
                { toolid: "axial_symetry_tool", nametotranslate: "axial_symetry_tool", defaultname: "point", icongraphic: "axial_symetry_tool" },
                { toolid: "central_symetry_tool", nametotranslate: "central_symetry_tool", defaultname: "point", icongraphic: "central_symetry_tool" },
                { toolid: "translation_tool", nametotranslate: "translation_tool", defaultname: "point", icongraphic: "translation_tool" },
                { toolid: "rotation_tool", nametotranslate: "rotation_tool", defaultname: "point", icongraphic: "rotation_tool" },
                { toolid: "dilation_tool", nametotranslate: "dilation_tool", defaultname: "point", icongraphic: "dilation_tool" }
            ],
            [//9
                { toolid: "text_tool", nametotranslate: "text_tool", defaultname: "point", icongraphic: "text_tool" },
                { toolid: "free_number_tool", nametotranslate: "free_number_tool", defaultname: "point", icongraphic: "free_number_tool" },
                { toolid: "slider_tool", nametotranslate: "slider_tool", defaultname: "point", icongraphic: "slider_tool" },
                { toolid: "expression_tool", nametotranslate: "expression_tool", defaultname: "point", icongraphic: "expression_tool" }
            ],
            [//10
                { toolid: "axis_tool", nametotranslate: "axis_tool", defaultname: "point", icongraphic: "axis_tool" },
                { toolid: "grid_tool", nametotranslate: "grid_tool", defaultname: "point", icongraphic: "grid_tool" },
                { toolid: "trace_tool", nametotranslate: "trace_tool", defaultname: "Trace", icongraphic: "trace_tool" },
                { toolid: "locus_tool", nametotranslate: "locus_tool", defaultname: "point", icongraphic: "locus_tool" },
                { toolid: "graph_tool", nametotranslate: "graph_tool", defaultname: "point", icongraphic: "graph_tool" }
            ]
        ]
    }
};
Presets.Current = Presets[Globals.Primary ? 'Primary' : 'Secondary'];

/**
 * Global application configuration for Cabri HTML5
 */
var calculator, numbers, ShowLicense=true, autoSave;


autoSave = true;

autoSave = false;



calculator = Presets.Current.Calculator;
numbers = Presets.Current.Numbers;


var CabriConfig = {
    Numbers: numbers,
    Calculator: calculator,


    AutoSave: autoSave,
    Strings: Object.assign(Presets.Common.Strings, Presets.Current.Strings),
    ShowBrowserWarning: true,
    ShowLicense: ShowLicense,
    Piles: Presets.Current.Piles,
    ShowPiles: true,
    PilesType: "teacher"
};
