import { useState } from 'react';
import useQuery from './useQuery';
import addressService from '../services/addressService';

const useAddress = (defaultValue) => {
  const [selectedProvince, setSelectedProvince] = useState(defaultValue?.selectedProvince);
  const [selectedDistrict, setSelectedDistrict] = useState(defaultValue?.selectedDistrict);
  const [selectedWard, setSelectedWard] = useState(defaultValue?.selectedWard);

  const { data: provinceData } = useQuery(addressService.getProvinces);

  const { data: districtData } = useQuery(
    () => selectedProvince && addressService.getDistrictsByProvince(selectedProvince),
    [selectedProvince]
  );

  const { data: wardData } = useQuery(
    () => selectedDistrict && addressService.getWardsByDistrict(selectedDistrict),
    [selectedDistrict]
  );

  const handleProvinceChange = (provinceId) => {
    setSelectedProvince(provinceId);
    setSelectedDistrict(undefined);
    setSelectedWard(undefined);
  };

  const handleDistrictChange = (districtId) => {
    setSelectedDistrict(districtId);
    setSelectedWard(undefined);
  };

  const handleWardChange = (wardId) => {
    setSelectedWard(wardId);
  };

  return {
    provinces: provinceData?.provinces?.map((item) => ({
      value: item.id,
      label: item.name,
    })),
    districts: districtData?.districts?.map((item) => ({
      value: item.id,
      label: item.name,
    })),
    wards: wardData?.wards?.map((item) => ({
      value: item.id,
      label: item.name,
    })),
    selectedProvince,
    selectedDistrict,
    selectedWard,
    handleProvinceChange,
    handleDistrictChange,
    handleWardChange
  };
};

export default useAddress;
