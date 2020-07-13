<?php

namespace App\Http\Controllers;

use App\Stat;
use Illuminate\Http\Request;

class StatController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    //

    public function showAllStats(Request $request){
        return response()->json(Stat::orderBy('created_at','desc')->get());
    }

    public function showOneStat($id){
        return response()->json(Stat::find($id));
    }

    public function create(Request $request){
        //validation
        $this->validate($request, [
            'birthCount' => 'required',
            'birthMale' => 'required',
            'birthFemale' => 'required'
        ]);

        //insert record
        $stat = new Stat;

        $stat->location = $request->input('selected');
        $stat->age = $request->input('motherAge');
        $stat->birthorder = $request->input('birthOrder');
        $stat->gender = $request->input('birthGender');
        $stat->count = $request->input('birthCount');
        $stat->male = $request->input('birthMale');
        $stat->female = $request->input('birthFemale');
        $stat->comment = $request->input('comment');

        $stat->save();

        return response()->json($stat); 
    }

    public function delete($id){
        Stat::findOrFail($id)->delete();
        return response('Deleted Successfully!');
    }

}
