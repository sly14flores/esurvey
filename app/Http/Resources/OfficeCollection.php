<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

use App\Http\Resources\OfficeResource;
use App\Office;

class OfficeCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
		$this->collection->transform(function (Office $office) {
			return new OfficeResource($office);
		});

		return parent::toArray($request);
    }
}
